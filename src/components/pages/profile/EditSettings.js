import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/general/ProfileTitle";
import UserSettings from "components/profile/settings/UserSettings";

function EditSettings({ uid }) {
  if (!uid) return <Redirect to="/" />;

  return (
    <div className="full-page-container">
      <IconSidebar />
      <div className="main-section-container">
        <ProfileTitle value="Settings" />
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
  uid: PropTypes.string.isRequired
};

const mapStateToProps = ({
  firebase: {
    auth: { uid }
  }
}) => {
  return {
    uid
  };
};

export default connect(mapStateToProps)(EditSettings);
