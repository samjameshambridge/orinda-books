import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ErrorBoundary from "components/error-boundary/ErrorBoundary";
import Login from "components/auth/Login";

function Landing({ auth: { uid } }) {
  // if the user is authenticated then redirect them to the dashboard
  if (uid) return <Redirect to="/dashboard" />;

  return (
    <div className="landing-container">
      <ErrorBoundary>
        <h1>Orinda Books</h1>
        <Login />
      </ErrorBoundary>
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
