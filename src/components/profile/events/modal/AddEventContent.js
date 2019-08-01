import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import InputAddButton from "components/buttons/InputAddButton";

import { validateFormat } from "helpers/dateFuncs";
import { toggleModal } from "actions/modalActions";

function AddEventContent({ firestore, toggleModal }) {
  const [title, setTitle] = useState(),
    [time, setTime] = useState(),
    [notes, setNotes] = useState(),
    [dateOf, setDateOf] = useState();

  function submitHandler(e) {
    e.preventDefault();

    let validate = validateFormat(dateOf);

    if (!validate) {
      document.getElementById("dateOfInput").classList = "warning-input";
      document.querySelector(".input-warning-message").style.display = "block";

      return;
    } else {
      const newEvent = {
        title,
        time,
        dateOf,
        notes: notes ? notes : ""
      };

      firestore.add({ collection: "events" }, newEvent);

      toggleModal();
    }
  }

  return (
    <React.Fragment>
      <h3>New Event</h3>
      <form onSubmit={e => submitHandler(e)} className="event-add-modal-form">
        <input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="dateOf"
          id="dateOfInput"
          onChange={e => setDateOf(e.target.value)}
          placeholder="dd / mm / yyyy"
          required
        />
        <p className="input-warning-message">
          Please check again, your current date format is incorrect.
        </p>
        <input
          type="time"
          name="time"
          id="dateOfInput"
          onChange={e => setTime(e.target.value)}
          placeholder="time"
          required
        />
        <textarea
          name="notes"
          cols="30"
          rows="10"
          placeholder="Notes"
          onChange={e => setNotes(e.target.value)}
        />
        <InputAddButton />
      </form>
    </React.Fragment>
  );
}

AddEventContent.propTypes = {
  firestore: PropTypes.object,
  toggleModal: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    { toggleModal }
  ),
  firestoreConnect()
)(AddEventContent);
