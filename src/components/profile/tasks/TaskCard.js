import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setViewingItem, toggleModal } from "actions/modalActions";

import DeleteTaskIcon from "components/profile/tasks/DeleteTaskIcon";

function TaskCard({
  setViewingItem,
  task,
  task: { title, deadline },
  toggleModal
}) {
  function clickHandler(e) {
    if (e.target.className !== "fas fa-trash") {
      setViewingItem(task);
      toggleModal("view");
    }
  }

  return (
    <div className="task-card" onClick={e => clickHandler(e)}>
      <div className="pin-group">
        <i className="fas fa-map-pin fa-2x" />
        <i className="fas fa-map-pin fa-2x" />
      </div>
      <h4>
        {title} <br />
        <br /> Deadline: {deadline}
      </h4>
      <DeleteTaskIcon title={title} />
    </div>
  );
}

TaskCard.propTypes = {
  setViewingItem: PropTypes.func.isRequired,
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string,
    notes: PropTypes.string
  }),
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    setViewingItem,
    toggleModal
  }
)(TaskCard);
