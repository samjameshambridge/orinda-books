import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

function ModalXButton({ toggleModal }) {
  // on click, hide the modal
  return <i className="fas fa-times X-button" onClick={() => toggleModal()} />;
}

ModalXButton.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleModal }
)(ModalXButton);
