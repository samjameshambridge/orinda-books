import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ProfilePic from "components/general/ProfilePic";

function ProfileDetails({
  profile: { firstName, lastName, email, phone, position }
}) {
  return (
    <div className="profile-details-container">
      <div className="profile-info">
        <p>
          <span>Name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{firstName} {lastName}
        </p>
        <p>
          <span>Position:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{position}
        </p>
        <p>
          <span>Email:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {email}
        </p>
        <p>
          <span>Phone:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {phone}
        </p>
      </div>
      <ProfilePic className="profile-page-img" />
    </div>
  );
}

ProfileDetails.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    position: PropTypes.string
  })
};

const mapStateToProps = ({ firebase: { profile } }) => {
  return {
    profile
  };
};

export default connect(mapStateToProps)(ProfileDetails);
