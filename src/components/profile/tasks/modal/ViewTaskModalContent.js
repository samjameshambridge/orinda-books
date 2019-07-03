import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ViewTaskModalContent({ view_item: { deadline, notes, title } }) {
  return (
    <div className="view-task-modal-content">
      <h3>{title}</h3>
      <h5>Deadline: {deadline}</h5>
      <h4>Notes</h4>
      {notes ? (
        <p>{notes}</p>
      ) : (
        <p className="empty-notes-title">This task currently has no notes</p>
      )}
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
