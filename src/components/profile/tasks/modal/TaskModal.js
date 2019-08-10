import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

import AddTaskModalContent from "components/profile/tasks/modal/AddTaskModalContent";
import EditTaskModalContent from "components/profile/tasks/modal/EditTaskModalContent";
import ViewTaskModalContent from "components/profile/tasks/modal/ViewTaskModalContent";
import ModalXButton from "components/modal/ModalXButton";

function TaskModal({ modal_type, toggleModal }) {
  useEffect(() => {
    // click outside the modal closes the modal
    document.addEventListener("click", function clickFunction(e) {
      if (e.target.contains(document.querySelector(".modal-overlay"))) {
        toggleModal("");

        document.removeEventListener("click", clickFunction);
      }

      return function cleanUp() {
        document.removeEventListener("click", clickFunction);
      };
    });
  });

  let modalContent;

  // check the type of modal the user is trying to access
  if (modal_type === "add") modalContent = <AddTaskModalContent />;
  else if (modal_type === "view") modalContent = <ViewTaskModalContent />;
  else if (modal_type === "edit") modalContent = <EditTaskModalContent />;

  return (
    <div className="modal-overlay">
      <div className="profile-modal-content task-modal-content">
        <ModalXButton />
        {modalContent}
      </div>
    </div>
  );
}

TaskModal.propTypes = {
  modal_type: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ modal: { modal_type } }) => {
  return {
    modal_type
  };
};

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    { toggleModal }
  )
)(TaskModal);
