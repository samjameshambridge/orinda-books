import React from "react";
import PropTypes from "prop-types";

function InputSaveButton({ className }) {
  return (
    <input type="submit" value="Save" className={`${className} save-button`} />
  );
}

InputSaveButton.propTypes = {
  className: PropTypes.string
};

InputSaveButton.defaultProps = {
  className: ""
};

export default InputSaveButton;
