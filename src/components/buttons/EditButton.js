import React from "react";
import PropTypes from "prop-types";

function EditButton({ id, onClick }) {
  return (
    <button className="edit-button" id={id} onClick={onClick}>
      Edit
    </button>
  );
}

EditButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default EditButton;
