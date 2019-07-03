import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logIn } from "actions/authActions";

import LoginButton from "components/buttons/LoginButton";

function Login({ auth_error, logIn }) {
  const [email, emailStateFunc] = useState(""),
    [password, passwordStateFunc] = useState("");

  function handleChange(e) {
    if (e.target.type === "email") emailStateFunc(e.target.value);
    else if (e.target.type === "password") passwordStateFunc(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    logIn({ email, password });
  }

  return (
    <React.Fragment>
      <form className="landing-input-group">
        <input
          className="landing-input-username"
          type="email"
          placeholder="email..."
          name="usn"
          required
          onChange={e => handleChange(e)}
        />
        <input
          className="landing-input-password"
          type="password"
          placeholder="password..."
          name="psw"
          required
          onChange={e => handleChange(e)}
        />
        <div className="auth-error-group">
          {auth_error ? <h4>Login Error: {auth_error.message}</h4> : null}
        </div>
        <LoginButton onClick={e => handleClick(e)} />
      </form>
    </React.Fragment>
  );
}

Login.propTypes = {
  auth_error: PropTypes.object,
  logIn: PropTypes.func.isRequired
};

const mapStateToProps = ({ auth: { auth_error } }) => {
  return {
    auth_error
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(Login);
