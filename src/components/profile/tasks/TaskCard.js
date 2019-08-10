import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setViewingItem, toggleModal } from "actions/modalActions";

import CheckTaskIcon from "components/profile/tasks/CheckTaskIcon";
import DeleteTaskIcon from "components/profile/tasks/DeleteTaskIcon";
import EditTaskIcon from "components/profile/tasks/EditTaskIcon";

function TaskCard({
  setViewingItem,
  task,
  task: { checked, deadline, title },
  toggleModal
}) {
  function clickHandler(e) {
    // only open the view modal if white space has been clicked on the card
    if (
      e.target.classList === ".task-card" ||
      e.target.classList === ".pin-group" ||
      e.target.nodeName === "H4"
    ) {
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
      {checked && <CheckTaskIcon className="fa-2x" title={title} />}
      <div className="task-card-icon-group">
        {checked || <CheckTaskIcon title={title} />}
        <EditTaskIcon task={task} />
        <DeleteTaskIcon title={title} />
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  setViewingItem: PropTypes.func.isRequired,
  task: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    deadline: PropTypes.string,
    notes: PropTypes.string,
    title: PropTypes.string.isRequired
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
