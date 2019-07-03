import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

import ModalXButton from "components/modal/ModalXButton";
import ModalBody from "components/modal/ModalBody";

function Modal({ toggleModal }) {
  useEffect(() => {
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
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    toggleModal
  }
)(Modal);
