import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setViewingItem, toggleModal } from "actions/modalActions";
import ViewDetailsButton from "components/buttons/ViewDetailsButton";

function StaffListMember({
  member,
  member: { imageLocation, firstName, surname, position, dob },
  toggleModal,
  setViewingItem
}) {
  function clickHandler() {
    // sync the data for the member into the redux store
    setViewingItem(member);
    // toggle the modal, with the type of the modal set to view
    toggleModal("view");
  }

  return (
    <tr>
      <td>
        <img
          src={imageLocation}
          className="staff-list-member-img"
          alt="profile"
        />
      </td>
      <td>
        {firstName} {surname}
      </td>
      <td>{position}</td>
      <td>{dob}</td>
      <td>
        <ViewDetailsButton onClick={() => clickHandler()} />
      </td>
    </tr>
  );
}

StaffListMember.propTypes = {
  member: PropTypes.shape({
    dob: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
  }),
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { setViewingItem, toggleModal }
)(StaffListMember);
