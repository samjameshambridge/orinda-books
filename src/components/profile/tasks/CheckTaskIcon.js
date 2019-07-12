import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

function CheckTaskIcon({ className, firestore, tasks, title, uid }) {
  function clickHandler() {
    const tasksUpd = {
      tasks: tasks.map(task => {
        if (task.title === title) task.checked = !task.checked;

        return task;
      })
    };

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
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      notes: PropTypes.string
    })
  ),
  title: PropTypes.string.isRequired,
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
  connect(mapStateToProps)
)(CheckTaskIcon);
