import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logOut } from "actions/authActions";

function Logout({ logOut }) {
  return (
    <div className="logout" onClick={() => logOut()}>
      <span>Logout</span> <i className="fas fa-power-off" />
    </div>
  );
}

Logout.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default connect(
  null,
  { logOut }
)(Logout);
