import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import IconSidebar from "components/navigation/IconSidebar";
import LogoutModal from "components/auth/LogoutModal";
import ProfileTitle from "components/titles/ProfileTitle";
import UserSettings from "components/profile/settings/UserSettings";

function EditSettings({ modal_open, uid }) {
  if (!uid) return <Redirect to="/" />;

  let content;

  if (modal_open) content = <LogoutModal />;

  return (
    <div className="full-page-container">
      {content}
      <IconSidebar />
      <div className="main-section-container">
        <ProfileTitle value="Edit Settings" />
        <div className="settings-content-container settings-container">
          <div className="settings-content">
            <UserSettings uid={uid} />
          </div>
        </div>
      </div>
    </div>
  );
}

EditSettings.propTypes = {
  edit_type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  modal_open: PropTypes.bool,
  uid: PropTypes.string.isRequired
};

const mapStateToProps = ({
  firebase: {
    auth: { uid }
  },
  modal: { modal_open }
}) => {
  return {
    modal_open,
    uid
  };
};

export default connect(mapStateToProps)(EditSettings);
