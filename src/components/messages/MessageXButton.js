import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { closeMessage } from "actions/ordersActions";

function MessageXButton({ closeMessage }) {
  return <i className="fas fa-times X-button" onClick={() => closeMessage()} />;
}

MessageXButton.propTypes = {
  closeMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { closeMessage }
)(MessageXButton);
