import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import EditMemberContent from "components/admin/staff/modal/EditMemberContent";
import ViewMemberContent from "components/admin/staff/modal/ViewMemberContent";

function ViewDetailsModal({ edit_type }) {
  let modalContent;

  // if the user is editing then display the edit content
  if (edit_type === "edit_member") modalContent = <EditMemberContent />;
  // viewing the member is the default option
  else modalContent = <ViewMemberContent />;

  return <React.Fragment>{modalContent}</React.Fragment>;
}

ViewDetailsModal.propTypes = {
  edit_type: PropTypes.string
};

const mapStateToProps = ({ edit: { edit_type } }) => {
  return {
    edit_type
  };
};

export default connect(mapStateToProps)(ViewDetailsModal);
