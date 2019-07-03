import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Login from "components/auth/Login";

function Landing({ auth: { uid } }) {
  if (uid) return <Redirect to="/dashboard" />;

  return (
    <div className="landing-container">
      <h1>Orinda Books</h1>
      <Login />
    </div>
  );
}

Landing.propTypes = {
  auth: PropTypes.shape({
    uid: PropTypes.string
  })
};

const mapStateToProps = ({ firebase: { auth } }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(Landing);
