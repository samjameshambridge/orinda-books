import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { setEditType } from "actions/editActions";

import InputSaveButton from "components/buttons/InputSaveButton";
import LinkButton from "components/buttons/LinkButton";

class EditMemberForm extends Component {
  constructor(props) {
    super(props);

    this.firstNameInput = React.createRef();
    this.surnameInput = React.createRef();
    this.emailInput = React.createRef();
    this.dobInput = React.createRef();
    this.positionInput = React.createRef();
  }

  clickHandler(e) {
    e.preventDefault();

    this.props.setEditType("");
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const {
      firestore,
      setEditType,
      view_item: {
        dateAdded,
        dob,
        email,
        firstName,
        id,
        imageLocation,
        permissions,
        position,
        surname
      }
    } = this.props;

    firestore.delete({ collection: "staff", doc: id });

    const updMember = {
      dateAdded,
      dob: this.dobInput.current.value || dob,
      email: this.emailInput.current.value || email,
      firstName: this.firstNameInput.current.value || firstName,
      imageLocation,
      position: this.positionInput.current.value || position,
      permissions,
      surname: this.surnameInput.current.value || surname
    };

    firestore
      .add({ collection: "staff" }, updMember)
      .then(() => setEditType(""));
  }

  render() {
    const { email, firstName, surname, dob, position } = this.props.view_item;

    return (
      <React.Fragment>
        <form
          className="edit-member-form"
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
            <label htmlFor="surname">Surname: </label>
            <input
              type="text"
              name="surname"
              defaultValue={surname}
              ref={this.surnameInput}
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
            <label htmlFor="position">Position: </label>
            <input
              type="text"
              name="position"
              defaultValue={position}
              ref={this.positionInput}
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="dob">DoB: </label>
            <input
              type="text"
              name="dob"
              defaultValue={dob}
              ref={this.dobInput}
            />
          </div>
          <div className="edit-member-button-group">
            <InputSaveButton type="submit" />
            <LinkButton
              type="button"
              value="Cancel"
              onClick={e => this.clickHandler(e)}
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

EditMemberForm.propTypes = {
  firestore: PropTypes.object.isRequired,
  setEditType: PropTypes.func.isRequired,
  view_item: PropTypes.shape({
    dob: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default compose(
  connect(
    mapStateToProps,
    { setEditType }
  ),
  firestoreConnect()
)(EditMemberForm);
