import React from "react";
import PropTypes from "prop-types";

function InputAddButton({ id }) {
  return <input type="submit" value="Add" className="add-button" id={id} />;
}

InputAddButton.propTypes = {
  id: PropTypes.string
};

export default InputAddButton;
