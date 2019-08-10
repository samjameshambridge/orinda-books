import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logIn } from "actions/authActions";

import LoginButton from "components/buttons/LoginButton";

function Login({ auth_error, logIn }) {
  // the users details are kept in the state using react hooks
  // initial state is set to empty strings
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  function handleChange(e) {
    // if the email value has changed, change email state
    if (e.target.type === "email") setEmail(e.target.value);
    // if password value has changed, change password state
    else if (e.target.type === "password") setPassword(e.target.value);
  }

  function handleClick(e) {
    // prevent browser default behaviours
    e.preventDefault();
    // dispatch a login action
    logIn({ email, password });
  }

  return (
    <React.Fragment>
      <form className="landing-input-group">
        <input
          className="landing-input-username"
          type="email"
          placeholder="use: example@example.com"
          name="usn"
          required
          onChange={e => handleChange(e)}
        />
        <input
          className="landing-input-password"
          type="password"
          placeholder="use: password"
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
