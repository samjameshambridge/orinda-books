import React from "react";
import PropTypes from "prop-types";

function LoginButton({ onClick }) {
  return (
    <button className="login-button" type="Submit" onClick={onClick}>
      Login
    </button>
  );
}

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LoginButton;
