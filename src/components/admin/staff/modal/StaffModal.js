import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import AddMemberModal from "components/admin/staff/modal/AddMemberModal";
import ViewDetailsModal from "components/admin/staff/modal/ViewDetailsModal";

function StaffModal({ modal_type }) {
  let staffModal;

  // switch statement evaluates the modal type to determine which type of modal should be displayed
  switch (modal_type) {
    case "view":
      staffModal = <ViewDetailsModal />;
      break;

    case "add":
      staffModal = <AddMemberModal />;
      break;

    default:
      return <div />;
  }

  return <React.Fragment>{staffModal}</React.Fragment>;
}

StaffModal.propTypes = {
  modal_type: PropTypes.string.isRequired
};

const mapStateToProps = ({ modal: { modal_type } }) => {
  return {
    modal_type
  };
};

export default connect(mapStateToProps)(StaffModal);
