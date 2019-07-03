import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

function DeleteTaskIcon({ firestore, tasks, title, uid }) {
  function clickHandler() {
    const tasksUpd = {
      tasks: tasks.filter(item => item.title !== title)
    };

    firestore.update({ collection: "users", doc: uid }, tasksUpd);
  }

  return <i className="fas fa-trash" onClick={() => clickHandler()} />;
}

DeleteTaskIcon.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      notes: PropTypes.string
    })
  ),
  firestore: PropTypes.object,
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
)(DeleteTaskIcon);
