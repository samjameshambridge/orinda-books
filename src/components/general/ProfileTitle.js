import React from "react";
import PropTypes from "prop-types";

function ProfileTitle({ value }) {
  return (
    <h2 className="profile-page-title font-secondary">
      {value}{" "}
      <span>
        {value === "Profile" || value === "Edit Profile" ? (
          <i className="fas fa-user" />
        ) : value === "Tasks" ? (
          <i className="fas fa-feather-alt" />
        ) : value === "Events" ? (
          <i className="fas fa-calendar-alt" />
        ) : (
          <i className="fas fa-cog" />
        )}
      </span>
    </h2>
  );
}

ProfileTitle.propTypes = {
  value: PropTypes.string.isRequired
};

export default ProfileTitle;
