import React from "react";
import PropTypes from "prop-types";

function CloseMessageButton({ onClick }) {
  return (
    <button onClick={onClick} className="close-message-button">
      Close
    </button>
  );
}

CloseMessageButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CloseMessageButton;
