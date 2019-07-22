import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import CheckTaskIcon from "components/profile/tasks/CheckTaskIcon";
import DeleteTaskIcon from "components/profile/tasks/DeleteTaskIcon";
import EditTaskIcon from "components/profile/tasks/EditTaskIcon";

function ViewTaskModalContent({
  view_item,
  view_item: { checked, deadline, notes, title }
}) {
  return (
    <div className="view-task-modal-content">
      <div>
        <h3>{title}</h3>
        <h5>Deadline: {deadline}</h5>
        <h4>Notes</h4>
        {notes ? (
          <p>{notes}</p>
        ) : (
          <p className="empty-notes-title">This task currently has no notes</p>
        )}
      </div>

      <div className="task-card-icon-group">
        {checked || <CheckTaskIcon title={title} modal />}
        <EditTaskIcon task={view_item} modal />
        <DeleteTaskIcon title={title} modal />
      </div>
    </div>
  );
}

ViewTaskModalContent.propTypes = {
  view_item: PropTypes.shape({
    deadline: PropTypes.string.isRequired,
    notes: PropTypes.string,
    title: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default connect(mapStateToProps)(ViewTaskModalContent);
