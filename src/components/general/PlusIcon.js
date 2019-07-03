import React from "react";
import PropTypes from "prop-types";

function PlusIcon({ onClick }) {
  return <i className="fas fa-plus fa-2x" onClick={onClick} />;
}

PlusIcon.propTypes = {
  onClick: PropTypes.func
};

export default PlusIcon;
