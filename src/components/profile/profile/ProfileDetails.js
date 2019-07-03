import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProfileDetails({
  profile: { firstName, lastName, email, phone, position }
}) {
  return (
    <React.Fragment>
      <p>
        Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{firstName} {lastName}
      </p>
      <p>Position:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{position}</p>
      <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {email}</p>
      <p>Mobile:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {phone}</p>
    </React.Fragment>
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
