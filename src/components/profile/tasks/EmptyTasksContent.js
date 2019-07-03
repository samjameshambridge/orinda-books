import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleModal } from "actions/modalActions";

function EmptyTasksContent({ toggleModal }) {
  return (
    <div className="empty-tasks-group">
      <h2 className="tasks-empty-tasks-title font-secondary">
        You have no current tasks!
      </h2>
      <i className="fas fa-plus fa-2x" onClick={() => toggleModal()} />
    </div>
  );
}

EmptyTasksContent.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { toggleModal }
)(EmptyTasksContent);
