import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProfilePic({ className, photoUrl }) {
  let content;

  photoUrl
    ? (content = <img src={photoUrl} className={className} alt="profile" />)
    : (content = <div />);

  return <React.Fragment>{content}</React.Fragment>;
}

ProfilePic.propTypes = {
  className: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

const mapStateToProps = ({
  firebase: {
    profile: { photoUrl }
  }
}) => {
  return {
    photoUrl
  };
};

export default connect(mapStateToProps)(ProfilePic);
