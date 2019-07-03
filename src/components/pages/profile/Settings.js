import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setEditType } from "actions/editActions";

import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/general/ProfileTitle";
import UserSettings from "components/profile/settings/UserSettings";

function Settings({ setEditType, uid }) {
  useEffect(() => {
    if (!uid) {
      return <Redirect to="/" />;
    }

    setEditType(false);
  });

  return (
    <div className="full-page-container">
      <IconSidebar />
      <div className="main-section-container">
        <ProfileTitle value="Settings" />
        <div className="settings-container">
          <h2>Danger Zone</h2>
          <div className="settings-content">
            <UserSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

Settings.propTypes = {
  setEditType: PropTypes.func.isRequired,
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

export default connect(
  mapStateToProps,
  {
    setEditType
  }
)(Settings);
