import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

function DeleteTaskIcon({ firestore, modal, tasks, title, toggleModal, uid }) {
  function clickHandler() {
    if (modal) toggleModal();

    // filter out the task to be deleted
    const tasksUpd = {
      tasks: tasks.filter(item => item.title !== title)
    };

    // update users collection with an updated array
    firestore.update({ collection: "users", doc: uid }, tasksUpd);
  }

  return <i className="fas fa-trash" onClick={() => clickHandler()} />;
}

DeleteTaskIcon.propTypes = {
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
)(DeleteTaskIcon);
