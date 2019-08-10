import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ProfilePic({ className, photoUrl }) {
  let content;

  // firebase request to sunc to store doesnt send until after components have rendered
  // meaning that the first time this component is rendered, there is not photoUrl but
  // something must be rendered so an empty div is
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
