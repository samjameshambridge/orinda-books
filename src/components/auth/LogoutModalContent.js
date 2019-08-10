import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logOut, resetPassword } from "actions/authActions";
import { setViewingItem, toggleModal } from "actions/modalActions";

function LogoutModalContent({ logOut, resetPassword, toggleModal, view_item }) {
  function cancelHandler() {
    // on cancel, hide the modal
    toggleModal("");
  }

  function clickHandler() {
    // if there is a view item being used to store the password
    // this means that the user is being logged out on attempting to reset their password
    // else the user is logging out from the dashboard
    if (view_item) resetPassword(view_item);
    // dispatch a logout action
    logOut();
    // hide the modal
    toggleModal("");
  }

  return (
    <div className="logout-modal-content">
      <h4>Warning</h4>
      <p>
        This action will log you out of the application. Are you sure you want
        to continue?
      </p>
      <div className="logout-modal-button-group">
        <i className="fas fa-check fa-2x" onClick={() => clickHandler()} />
        <i className="fas fa-times fa-2x" onClick={() => cancelHandler()} />
      </div>
    </div>
  );
}

LogoutModalContent.propTypes = {
  logOut: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  view_item: PropTypes.string
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default connect(
  mapStateToProps,
  { logOut, resetPassword, setViewingItem, toggleModal }
)(LogoutModalContent);
