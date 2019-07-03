import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

import PlusIcon from "components/general/PlusIcon";

function AddNewTask({ toggleModal }) {
  return (
    <div className="task-card add-task-card" onClick={() => toggleModal("add")}>
      <div className="add-task-card-content">
        <h3 className="font-secondary">Click here to add a new task!</h3>
        <PlusIcon />
      </div>
    </div>
  );
}

AddNewTask.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    toggleModal
  }
)(AddNewTask);
