import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LogoutModalContent from "components/auth/LogoutModalContent";
import ModalXButton from "components/modal/ModalXButton";

import { setViewingItem, toggleModal } from "actions/modalActions";

function LogoutModal({ setViewingItem, toggleModal }) {
  useEffect(() => {
    // when component mounts add an event listern to the modal
    document.addEventListener("click", function clickFunction(e) {
      // if you click outside the modal
      if (e.target.contains(document.querySelector(".logout-modal-overlay"))) {
        // hide the modal
        toggleModal("");

        // remove the event listener
        document.removeEventListener("click", clickFunction);
      }

      return function cleanUp() {
        // when the component dismounts, remove the event listener
        document.removeEventListener("click", clickFunction);
      };
    });

    return () => {
      // if the page has been navigated away from and the component dismounts, remove the event listener
      setViewingItem("");
    };
  });

  return (
    <div className="logout-modal-overlay">
      <div className="logout-modal-container">
        <ModalXButton />
        <LogoutModalContent />
      </div>
    </div>
  );
}

LogoutModal.propTypes = {
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { setViewingItem, toggleModal }
)(LogoutModal);
