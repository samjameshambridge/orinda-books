import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AddMemberGroup from "components/admin/staff/AddMemberGroup";
import AdminTitle from "components/titles/AdminTitle";
import DropdownNavigation from "components/navigation/DropdownNavigation";
import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import StaffTable from "components/admin/staff/table/StaffTable";
import Modal from "components/modal/Modal";
import WidgetNavigation from "components/navigation/WidgetNavigation";

function Staff({ modal_open, permissions, uid }) {
  // if the user is not authenticated, return them to the login page
  if (!uid) return <Redirect to="/" />;

  let component;
  // if the redux store says the modal should be open, display the modal
  if (modal_open) component = <Modal />;

  return (
    <div className="admin-full-page-container">
      {component}
      <div className="topbar-container">
        <DropdownNavigation />
        <WidgetNavigation />
      </div>
      <div className="admin-content-container">
        <ErrorBoundary>
          <AdminTitle value="Staff" />
          {permissions === "all" && <AddMemberGroup />}
          <StaffTable />
        </ErrorBoundary>
      </div>
    </div>
  );
}

Staff.propTypes = {
  uid: PropTypes.string,
  modal_open: PropTypes.bool.isRequired,
  permissions: PropTypes.string
};

const mapStateToProps = ({
  firebase: {
    auth: { uid },
    profile: { permissions }
  },
  modal: { modal_open }
}) => {
  return {
    uid,
    modal_open,
    permissions
  };
};

export default connect(mapStateToProps)(Staff);
