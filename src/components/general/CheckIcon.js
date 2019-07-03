import React from "react";
import PropTypes from "prop-types";

function CheckIcon({ onClick }) {
  return <i className="fas fa-check fa-2x" onClick={onClick} />;
}

CheckIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CheckIcon;
