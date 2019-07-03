import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { setEditType } from "actions/editActions";

import EditMemberForm from "components/admin/staff/modal/EditMemberForm";

function EditMemberContent({ setEditType, view_item: { firstName, surname } }) {
  useEffect(() => {
    return () => {
      setEditType("");
    };
  });

  return (
    <div className="staff-edit-modal">
      <h1 className="edit-member-title">
        Editing{" "}
        <span>
          {firstName} {surname}
        </span>
      </h1>
      <EditMemberForm />
    </div>
  );
}

EditMemberContent.propTypes = {
  setEditType: PropTypes.func.isRequired,
  view_item: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default connect(
  mapStateToProps,
  { setEditType }
)(EditMemberContent);
