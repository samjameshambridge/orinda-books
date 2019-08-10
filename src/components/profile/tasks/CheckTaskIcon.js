import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

function CheckTaskIcon({
  className,
  firestore,
  modal,
  tasks,
  title,
  toggleModal,
  uid
}) {
  function clickHandler() {
    if (modal) toggleModal();

    // update the task to show it has been checked (completed) or unchecked (not completed)
    const tasksUpd = {
      tasks: tasks.map(task => {
        if (task.title === title) task.checked = !task.checked;

        return task;
      })
    };

    // update tasks collection with updated task aray
    firestore.update({ collection: "users", doc: uid }, tasksUpd);
  }

  return (
    <i
      className={`fas fa-check ${className ? className : ""}`}
      onClick={() => clickHandler()}
    />
  );
}

CheckTaskIcon.propTypes = {
  className: PropTypes.string,
  firestore: PropTypes.object,
  modal: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      notes: PropTypes.string
    })
  ),
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired
};

const mapStateToProps = ({
  firebase: {
    auth: { uid }
  },
  firebase: {
    profile: { tasks }
  }
}) => {
  return {
    tasks,
    uid
  };
};

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    { toggleModal }
  )
)(CheckTaskIcon);
