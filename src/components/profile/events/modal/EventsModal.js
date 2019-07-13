import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";
import { validateFormat } from "helpers/dateFuncs";

import ModalXButton from "components/modal/ModalXButton";
import InputAddButton from "components/buttons/InputAddButton";

function AddEventModal({ firestore, toggleModal }) {
  const [title, setTitle] = useState(),
    [dateOf, setDateOf] = useState();

  useEffect(() => {
    document.addEventListener("click", function clickFunction(e) {
      if (e.target.contains(document.querySelector(".modal-overlay"))) {
        toggleModal("");

        document.removeEventListener("click", clickFunction);
      }

      return function cleanUp() {
        document.removeEventListener("click", clickFunction);
      };
    });
  });

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
        dateOf
      };

      firestore.add({ collection: "events" }, newEvent);

      toggleModal();
    }
  }
  return (
    <div className="modal-overlay">
      <div className="profile-modal-content event-add-modal-content">
        <ModalXButton />
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
          <textarea name="notes" cols="30" rows="10" placeholder="Notes" />
          <InputAddButton />
        </form>
      </div>
    </div>
  );
}

AddEventModal.propTypes = {
  firestore: PropTypes.object,
  toggleModal: PropTypes.func.isRequired
};

export default compose(
  firestoreConnect(),
  connect(
    null,
    {
      toggleModal
    }
  )
)(AddEventModal);
