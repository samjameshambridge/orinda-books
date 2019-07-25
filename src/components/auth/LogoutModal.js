import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LogoutModalContent from "components/auth/LogoutModalContent";
import ModalXButton from "components/modal/ModalXButton";

import { setViewingItem, toggleModal } from "actions/modalActions";

function LogoutModal({ setViewingItem, toggleModal }) {
  useEffect(() => {
    document.addEventListener("click", function clickFunction(e) {
      if (e.target.contains(document.querySelector(".logout-modal-overlay"))) {
        toggleModal("");

        document.removeEventListener("click", clickFunction);
      }

      return function cleanUp() {
        document.removeEventListener("click", clickFunction);
      };
    });

    return () => {
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
