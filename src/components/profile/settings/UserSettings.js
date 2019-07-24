import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { firebaseConnect } from "react-redux-firebase";

import { setEditType } from "actions/editActions";
import { logOut, resetPassword } from "actions/authActions";

import EditButton from "components/buttons/EditButton";
import InputSaveButton from "components/buttons/InputSaveButton";

function UserSettings({
  edit_type,
  firebase: {
    auth: { email }
  },
  history: { push },
  logOut,
  resetPassword,
  setEditType
}) {
  const [password, changePassword] = useState();

  function editHandler() {
    setEditType(true);
    push("/settings/edit");
  }
  function submitHandler(e) {
    e.preventDefault();

    if (!password || password.length < 7) {
      document.getElementById("passwordInput").classList = "warning-input";
      document.querySelector(".input-warning-message").style.display = "block";

      return;
    }

    resetPassword(password);
    logOut();
  }

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
  email: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  resetPassword: PropTypes.func.isRequired,
  setEditType: PropTypes.func.isRequired
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
    { logOut, resetPassword, setEditType }
  )
)(withRouter(UserSettings));
