import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setEditType } from "actions/editActions";

import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/titles/ProfileTitle";
import UserSettings from "components/profile/settings/UserSettings";

function Settings({ setEditType, uid }) {
  useEffect(() => {
    // upon component mount, if user is not authenticated, redirect them to the login page
    if (!uid) {
      return <Redirect to="/" />;
    }

    // on mount, make sure edit state is set to false
    setEditType(false);
  });

  return (
    <div className="full-page-container">
      <IconSidebar />
      <div className="main-section-container">
        <ErrorBoundary>
          <ProfileTitle value="Settings" />
          <div className="settings-container">
            <div className="settings-content">
              <UserSettings />
            </div>
          </div>
        </ErrorBoundary>
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
