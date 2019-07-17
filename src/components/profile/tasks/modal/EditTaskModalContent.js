import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import uuid from "uuid";
import { validateFormat } from "helpers/dateFuncs";
import { toggleModal } from "actions/modalActions";

import InputSaveButton from "components/buttons/InputSaveButton";

class EditTaskModalContent extends Component {
  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
    this.deadlineInput = React.createRef();
    this.notesInput = React.createRef();
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const { firestore, tasks, toggleModal, uid } = this.props,
      validate = validateFormat(this.deadlineInput.current.value);

    if (!validate) {
      document.getElementById("deadlineInput").classList = "warning-input";
      document.querySelector(".input-warning-message").style.display = "block";
      return;
    } else {
      toggleModal();

      let tasksUpd = {
        tasks: tasks.map(task =>
          task.id === this.props.view_item.id
            ? {
                title: this.titleInput.current.value,
                deadline: this.deadlineInput.current.value,
                notes: this.notesInput.current.value
                  ? this.notesInput.current.value
                  : null,
                checked: false,
                id: uuid()
              }
            : task
        )
      };

      firestore.update({ collection: "users", doc: uid }, tasksUpd);
    }
  }

  render() {
    const { title, deadline, notes } = this.props.view_item;

    return (
      <React.Fragment>
        <h3>New Task</h3>
        <form onSubmit={e => this.onSubmitHandler(e)}>
          <input
            type="text"
            name="title"
            className="title-input"
            defaultValue={title}
            ref={this.titleInput}
          />
          <input
            id="deadlineInput"
            type="text"
            name="deadline"
            className="deadline-input"
            defaultValue={deadline}
            ref={this.deadlineInput}
          />
          <p className="input-warning-message">
            Please check again, your current date format is incorrect.
          </p>
          <textarea
            maxLength="100"
            name="notes"
            className="notes-input"
            defaultValue={notes}
            ref={this.notesInput}
          />
          <InputSaveButton />
        </form>
      </React.Fragment>
    );
  }
}

EditTaskModalContent.propTypes = {
  firestore: PropTypes.object,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      notes: PropTypes.string,
      id: PropTypes.string.isRequired
    })
  ),
  toggleModal: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
  view_item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    notes: PropTypes.string,
    id: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({
  firebase: {
    auth: { uid },
    profile: { tasks }
  },
  modal: { view_item }
}) => {
  return {
    tasks,
    uid,
    view_item
  };
};

export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    { toggleModal }
  )
)(EditTaskModalContent);
