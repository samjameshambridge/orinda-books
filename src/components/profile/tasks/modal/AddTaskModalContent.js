import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import uuid from "uuid";
import { validateFormat } from "helpers/dateFuncs";
import { toggleModal } from "actions/modalActions";

import InputAddButton from "components/buttons/InputAddButton";

function AddTaskModalContent({ firestore, tasks, toggleModal, uid }) {
  const [title, setTitle] = useState(),
    [deadline, setDeadline] = useState(),
    [notes, setNotes] = useState();

  function onSubmitHandler(e) {
    e.preventDefault();

    const validate = validateFormat(deadline);

    if (!validate) {
      document.getElementById("deadlineInput").classList = "warning-input";
      document.querySelector(".input-warning-message").style.display = "block";
      return;
    } else {
      tasks.push({
        title,
        deadline,
        notes: notes ? notes : null,
        checked: false,
        id: uuid()
      });

      const tasksUpd = {
        tasks
      };

      firestore.update({ collection: "users", doc: uid }, tasksUpd);
      toggleModal();
    }
  }

  return (
    <React.Fragment>
      <h3>New Task</h3>
      <form onSubmit={e => onSubmitHandler(e)}>
        <input
          type="text"
          name="title"
          className="title-input"
          placeholder="Title"
          required
          onChange={e => setTitle(e.target.value)}
        />
        <input
          id="deadlineInput"
          type="text"
          name="deadline"
          className="deadline-input"
          placeholder="Deadline: dd/mm/yyyy"
          required
          onChange={e => setDeadline(e.target.value)}
        />
        <p className="input-warning-message">
          Please check again, your current date format is incorrect.
        </p>
        <textarea
          maxLength="100"
          name="notes"
          className="notes-input"
          placeholder="Notes"
          onChange={e => setNotes(e.target.value)}
        />
        <InputAddButton id="inputAddButton" />
      </form>
    </React.Fragment>
  );
}

AddTaskModalContent.propTypes = {
  firestore: PropTypes.object,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      notes: PropTypes.string
    })
  ),
  toggleModal: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired
};

const mapStateToProps = ({
  firebase: {
    auth: { uid },
    profile: { tasks }
  }
}) => {
  return {
    tasks,
    uid
  };
};

export default compose(
  connect(
    mapStateToProps,
    { toggleModal }
  ),
  firestoreConnect()
)(AddTaskModalContent);
