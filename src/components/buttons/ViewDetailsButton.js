import React from "react";
import PropTypes from "prop-types";

function ViewDetailsButton({ onClick }) {
  return (
    <button className="view-details-button" onClick={onClick}>
      View
    </button>
  );
}

ViewDetailsButton.propTypes = {
  onClick: PropTypes.func
};

export default ViewDetailsButton;
