import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import ModalCloseButton from "components/modal/ModalCloseButton";
import LinkButton from "components/buttons/LinkButton";
import { setEditType } from "actions/editActions";

function ViewMemberContent({
  permissions,
  setEditType,
  view_item: {
    id,
    dateAdded,
    dob,
    email,
    firstName,
    imageLocation,
    position,
    surname
  }
}) {
  return (
    <div className="staff-modal">
      <div>
        <h1 className="staff-view-modal-title">
          {firstName} {surname}
        </h1>
        <h5>{id}</h5>
      </div>
      <div className="staff-modal-view-content">
        <img
          src={imageLocation}
          className="staff-modal-view-image"
          alt="book"
        />
        <div className="modal-view-item-info">
          <p>{email}</p>
          <p>{position}</p>
          <p>DoB: {dob}</p>
          <p>Added to Database: {dateAdded}</p>
        </div>
      </div>
      <div className="staff-modal-view-button-group">
        <ModalCloseButton />
        {permissions === "all" && (
          <LinkButton value="Edit" onClick={() => setEditType("edit_member")} />
        )}
      </div>
    </div>
  );
}

ViewMemberContent.propTypes = {
  permissions: PropTypes.string.isRequired,
  setEditType: PropTypes.func.isRequired,
  view_item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    imageLocation: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({
  edit: { edit_type },
  firebase: {
    profile: { permissions }
  },
  modal: { view_item }
}) => {
  return {
    edit_type,
    permissions,
    view_item
  };
};

export default connect(
  mapStateToProps,
  { setEditType }
)(ViewMemberContent);
