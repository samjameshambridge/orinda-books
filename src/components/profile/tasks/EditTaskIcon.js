import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal, setViewingItem } from "actions/modalActions";

function EditTaskIcon({ task, toggleModal, setViewingItem }) {
  function clickHandler() {
    setViewingItem(task);
    toggleModal("edit");
  }

  return <i className="fas fa-pen" onClick={() => clickHandler()} />;
}

EditTaskIcon.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    notes: PropTypes.string
  }),
  toggleModal: PropTypes.func.isRequired,
  setViewingItem: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleModal, setViewingItem }
);
