import React, { Component } from "react";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";

import InputSaveButton from "components/buttons/InputSaveButton";

class ProfileInputDetails extends Component {
  constructor(props) {
    super(props);

    // these properties are reference to each of the inputs in the DOM form
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.positionInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }

  onSubmitHandler = e => {
    e.preventDefault();

    const {
      firebase,
      history: { push }
    } = this.props;

    // assemble the updated profile from the DOM references to the inputs
    const updProfile = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      position: this.positionInput.current.value,
      phone: this.phoneInput.current.value
    };

    // call update profile method on firebase object by passing in the assembled profile
    firebase.updateProfile(updProfile);

    // redirect the user to the original profile page
    push("/profile");
  };

  render() {
    const { firstName, lastName, email, phone, position } = this.props.profile;

    return (
      <React.Fragment>
        <form
          className="edit-profile-form"
          onSubmit={e => this.onSubmitHandler(e)}
        >
          <div className="label-input-group">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              defaultValue={firstName}
              ref={this.firstNameInput}
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              defaultValue={lastName}
              ref={this.lastNameInput}
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="position">Position: </label>
            <input
              type="text"
              name="position"
              defaultValue={position}
              ref={this.positionInput}
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              defaultValue={email}
              ref={this.emailInput}
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="mobile">Mobile: </label>
            <input
              type="number"
              name="phone"
              defaultValue={phone}
              ref={this.phoneInput}
            />
          </div>
          <InputSaveButton type="submit" />
        </form>
      </React.Fragment>
    );
  }
}

ProfileInputDetails.propTypes = {
  firebase: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    position: PropTypes.string
  })
};

export default firebaseConnect()(withRouter(ProfileInputDetails));
