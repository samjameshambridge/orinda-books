import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AddMemberGroup from "components/admin/sales/AddMemberGroup";
import AdminTitle from "components/general/AdminTitle";
import DropdownNavigation from "components/navigation/DropdownNavigation";
import StaffTable from "components/admin/staff/table/StaffTable";
import Modal from "components/modal/Modal";
import WidgetNavigation from "components/navigation/WidgetNavigation";

function Staff({ modal_open, permissions, uid }) {
  if (!uid) return <Redirect to="/" />;

  let component;
  if (modal_open) component = <Modal />;

  return (
    <div className="admin-full-page-container">
      {component}
      <div className="topbar-container">
        <DropdownNavigation />
        <WidgetNavigation />
      </div>
      <div className="admin-content-container">
        <AdminTitle value="Staff" />
        {permissions === "all" && <AddMemberGroup />}
        <StaffTable />
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
