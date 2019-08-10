import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

function ModalXButton({ toggleModal }) {
  // on click, hide the modal
  return (
    <button
      className="modal-close-button bg-theme-yellow text-theme-blue"
      onClick={() => toggleModal()}
    >
      Close
    </button>
  );
}

ModalXButton.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleModal }
)(ModalXButton);
