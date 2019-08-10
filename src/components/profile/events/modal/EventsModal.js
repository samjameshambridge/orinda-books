import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal, setViewingItem } from "actions/modalActions";

import AddEventContent from "components/profile/events/modal/AddEventContent";
import ModalXButton from "components/modal/ModalXButton";
import ViewEventContent from "components/profile/events/modal/ViewEventContent";

function EventsModal({ modal_type, setViewingItem, toggleModal }) {
  useEffect(() => {
    // on mountaing listen to any clicks acting outside of the modal content
    document.addEventListener("click", function clickFunction(e) {
      if (e.target.contains(document.querySelector(".modal-overlay"))) {
        toggleModal();

        document.removeEventListener("click", clickFunction);
      }

      return function cleanUp() {
        document.removeEventListener("click", clickFunction);
      };
    });

    return () => {
      // on dismount of the modal, reset the viewing data
      setViewingItem("");
    };
  });

  let modalContent;

  // subscribe to redux store to check what type of modal should be displayed
  if (modal_type === "add") {
    modalContent = <AddEventContent />;
  } else if (modal_type === "view") {
    modalContent = <ViewEventContent />;
  }

  return (
    <div className="modal-overlay">
      <div className="profile-modal-content event-add-modal-content">
        <ModalXButton />
        {modalContent}
      </div>
    </div>
  );
}

EventsModal.propTypes = {
  modal_type: PropTypes.string,
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ modal: { modal_type } }) => {
  return {
    modal_type
  };
};

export default connect(
  mapStateToProps,
  {
    setViewingItem,
    toggleModal
  }
)(EventsModal);
