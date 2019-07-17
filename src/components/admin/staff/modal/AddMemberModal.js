import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";
import { getDate } from "helpers/dateFuncs";

function AddMemberModal({ firebase, firestore, toggleModal }) {
  const [firstName, setFirstName] = useState(),
    [surname, setSurname] = useState(),
    [email, setEmail] = useState(),
    [dob, setDob] = useState(),
    [position, setPosition] = useState(),
    [permissions, setPermissions] = useState(),
    [image, setImage] = useState();

  function submitHandler(e) {
    e.preventDefault(e);

    toggleModal();

    var storageRef = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);

    storageRef.on(
      "state_changed",
      null,
      error => {
        console.warn(error);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const newMember = {
            dateAdded: getDate(),
            dob,
            email,
            firstName,
            fullName: `${firstName} ${surname}`,
            imageLocation: downloadURL,
            position,
            permissions,
            surname
          };

          firestore.add({ collection: "staff" }, newMember);
        });
      }
    );
  }

  return (
    <form onSubmit={e => submitHandler(e)} className="add-staff-form">
      <div className="staff-input-group">
        <h2>New Staff Member</h2>
        <div className="staff-form-group">
          <div className="member-info">
            <div className="member-names-group">
              <div className="label-input-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  name="First Name"
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="label-input-group">
                <label htmlFor="surname">Surname:</label>
                <input
                  type="text"
                  name="surname"
                  onChange={e => setSurname(e.target.value)}
                  required
                />
              </div>{" "}
            </div>
            <div className="member-email-dob-group">
              <div className="label-input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="label-input-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  onChange={e => setDob(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="member-permissions-position-group">
              <div className="label-input-group">
                <label htmlFor="position">Position:</label>
                <input
                  type="text"
                  name="position"
                  onChange={e => setPosition(e.target.value)}
                  required
                />
              </div>
              <div className="permissions-label-input-group">
                <label htmlFor="permissions">Permissions:</label>
                <div className="permissions-inputs-labels">
                  <div className="radio-input-label-group">
                    <input
                      type="radio"
                      name="permissions"
                      onChange={e => setPermissions(e.target.value)}
                      required
                    />
                    <label htmlFor="permissions">All</label>
                  </div>
                  <div className="radio-input-label-group">
                    <input
                      type="radio"
                      name="permissions"
                      onChange={e => setPermissions(e.target.value)}
                      required
                    />
                    <label htmlFor="permissions">Regular</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="member-photo">
            <div className="label-input-group">
              <label htmlFor="firstName">Upload Photo:</label>
              <input
                type="file"
                name="photo"
                onChange={e => setImage(e.target.files[0])}
                required
              />
            </div>
          </div>
        </div>
        <input className="add-button" type="submit" value="Add" />
      </div>
    </form>
  );
}

AddMemberModal.propTypes = {
  firebase: PropTypes.object,
  firestore: PropTypes.object,
  toggleModal: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  firestoreConnect(),
  connect(
    null,
    {
      toggleModal
    }
  )
)(AddMemberModal);
