import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

function LinkButton({ className, onClick, value }) {
  return (
    <button onClick={onClick} className={`link-button ${className}`}>
      {value}
    </button>
  );
}

LinkButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default connect(
  null,
  {
    toggleModal
  }
)(LinkButton);
