import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import IconSidebar from "components/navigation/IconSidebar";
import ProfileTitle from "components/titles/ProfileTitle";
import ProfileInputDetails from "components/profile/profile/ProfileInputDetails";

function EditProfile({ profile, uid }) {
  if (!uid) return <Redirect to="/" />;

  return (
    <div className="full-page-container">
      <IconSidebar pathname="/profile" />
      <div className="main-section-container">
        <ProfileTitle value="Edit Profile" />
        <div className="profile-related-content-container profile-page-content-container">
          <ProfileInputDetails profile={profile} />
        </div>
      </div>
    </div>
  );
}

EditProfile.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    position: PropTypes.string
  }),
  uid: PropTypes.string
};

const mapStateToProps = ({
  firebase: {
    auth: { uid },
    profile
  }
}) => {
  return {
    profile,
    uid
  };
};

export default connect(mapStateToProps)(EditProfile);
