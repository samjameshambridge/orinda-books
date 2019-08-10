import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal, setViewingItem } from "actions/modalActions";

import ModalXButton from "components/modal/ModalXButton";
import ModalBody from "components/modal/ModalBody";

function Modal({ setViewingItem, toggleModal }) {
  useEffect(() => {
    // when the modal mounts listen for clicks outside of the modal
    document.addEventListener("click", function clickFunction(e) {
      if (e.target.contains(document.querySelector(".modal-overlay"))) {
        // upon an outside click, hide the modal
        toggleModal("");

        document.removeEventListener("click", clickFunction);
      }

      return function cleanUp() {
        document.removeEventListener("click", clickFunction);
      };
    });

    return () => {
      // on component dismounts, reset the viewing item for upcoming modals
      setViewingItem("");
    };
  });

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ModalXButton />
        <ModalBody />
      </div>
    </div>
  );
}

Modal.propTypes = {
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    setViewingItem,
    toggleModal
  }
)(Modal);
