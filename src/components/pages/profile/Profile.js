import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import EditButton from "components/buttons/EditButton";
import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/titles/ProfileTitle";
import ProfileDetails from "components/profile/profile/ProfileDetails";

function Profile({ history: { push }, uid }) {
  if (!uid) return <Redirect to="/" />;

  return (
    <div className="full-page-container">
      <IconSidebar />
      <div className="main-section-container">
        <ProfileTitle value="Profile" />
        <div className="profile-related-content-container profile-page-content-container">
          <ProfileDetails />
          <EditButton onClick={() => push("/profile/edit")} />
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
  uid: PropTypes.string
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

export default connect(mapStateToProps)(Profile);
