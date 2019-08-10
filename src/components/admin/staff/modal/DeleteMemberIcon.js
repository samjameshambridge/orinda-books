import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import { toggleModal } from "actions/modalActions";

function DeleteMemberIcon({ firestore, member: { id }, toggleModal }) {
  function clickHandler() {
    // hide the modal
    toggleModal();
    // delete the member from the staff NoSql collection using his id which is available by subscription to the redux store
    firestore.delete({ collection: "staff", doc: id });
  }

  return <i className="fas fa-trash" onClick={() => clickHandler()} />;
}

DeleteMemberIcon.propTypes = {
  firestore: PropTypes.object,
  member: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  toggleModal: PropTypes.func.isRequired
};

export default compose(
  connect(
    null,
    { toggleModal }
  ),
  firestoreConnect()
)(DeleteMemberIcon);
