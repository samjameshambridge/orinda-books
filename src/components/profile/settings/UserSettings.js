import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";

import { setEditType } from "actions/editActions";
import { setViewingItem, toggleModal } from "actions/modalActions";

import EditButton from "components/buttons/EditButton";
import InputSaveButton from "components/buttons/InputSaveButton";

function UserSettings({
  edit_type,
  firebase: {
    auth: { email }
  },
  history: { push },
  setEditType,
  setViewingItem,
  toggleModal
}) {
  // password will be stored in state using hook
  const [password, changePassword] = useState();

  function editHandler() {
    setEditType(true);

    // redirect to the EditSettings page
    push("/settings/edit");
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!password || password.length < 7) {
      // display warning text with warning theme
      document.getElementById("passwordInput").classList = "warning-input";
      document.querySelector(".input-warning-message").style.display = "block";

      // after 3 seconds, hide the warning message
      setTimeout(() => {
        document.getElementById("passwordInput").classList = "";
        document.querySelector(".input-warning-message").style.display = "none";
      }, 3000);

      return;
    }

    // store the password in redux state under 'viewing item'
    setViewingItem(password);

    toggleModal();
  }

  // if your in an edit state, show edit-able inputs
  if (edit_type) {
    return (
      <React.Fragment>
        <form
          onSubmit={e => submitHandler(e)}
          className="settings-user-form text-theme-blue"
        >
          <p>
            <span>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {email}
          </p>
          <div className="label-input-group">
            <label htmlFor="language">Password:</label>
            <input
              id="passwordInput"
              type="text"
              onChange={e => changePassword(e.target.value)}
            />
          </div>
          <p className="input-warning-message">
            Please check again, you must enter a password 7 characters or
            longer.
          </p>
          <InputSaveButton />
        </form>
      </React.Fragment>
    );
  } else {
    // if user is not editing, show paragraphs
    return (
      <React.Fragment>
        <div className="settings-email-password">
          <p>
            <span>Email:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}
          </p>
          <p>
            <span>Password:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******
          </p>
        </div>
        {!edit_type && (
          <EditButton id="userSettings" onClick={() => editHandler()} />
        )}
      </React.Fragment>
    );
  }
}

UserSettings.propTypes = {
  edit_type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  email: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  setEditType: PropTypes.func.isRequired,
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const mapStateToProps = ({ edit: { edit_type }, firebase }) => {
  return {
    edit_type,
    firebase
  };
};

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    { setEditType, setViewingItem, toggleModal }
  )
)(withRouter(UserSettings));
