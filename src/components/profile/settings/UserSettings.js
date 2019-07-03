import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setEditType } from "actions/editActions";

import EditButton from "components/buttons/EditButton";
import InputSaveButton from "components/buttons/InputSaveButton";

class UserSettings extends Component {
  editHandler() {
    const {
      history: { push },
      setEditType
    } = this.props;

    setEditType(true);
    push("/settings/edit");
  }
  submitHandler(e) {
    const {
      history: { push }
    } = this.props;

    e.preventDefault();
    push("/settings");
  }
  render() {
    const { edit_type, email } = this.props;

    if (edit_type) {
      return (
        <React.Fragment>
          <form
            onSubmit={e => this.submitHandler(e)}
            className="settings-user-form text-theme-blue"
          >
            <p>{email}</p>
            <div className="label-input-group">
              <label htmlFor="language">Password</label>
              <input type="text" />
            </div>
            <InputSaveButton />
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="settings-email-password">
            <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{email}</p>
            <p>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*******</p>
          </div>
          {!edit_type && (
            <EditButton id="userSettings" onClick={() => this.editHandler()} />
          )}
        </React.Fragment>
      );
    }
  }
}

UserSettings.propTypes = {
  edit_type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  email: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  setEditType: PropTypes.func.isRequired
};

const mapStateToProps = ({
  edit: { edit_type },
  firebase: {
    auth: { email }
  }
}) => {
  return {
    edit_type,
    email
  };
};

export default connect(
  mapStateToProps,
  { setEditType }
)(withRouter(UserSettings));
