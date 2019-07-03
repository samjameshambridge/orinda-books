import React from "react";
import PropTypes from "prop-types";

function ProfileTitle({ value }) {
  return <h2 className="profile-page-title font-secondary">{value}</h2>;
}

ProfileTitle.propTypes = {
  value: PropTypes.string.isRequired
};

export default ProfileTitle;
