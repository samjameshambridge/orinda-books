import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import HomeLogo from "components/general/HomeLogo";

function DropdownNavigation({ history: { push } }) {
  const [dropdownState, dropdownStateFunc] = useState(false);

  function clickHandler() {
    push("/dashboard");
  }

  function dropdownHandler() {
    const menu = document.querySelector("#dropdown-menu");

    if (!dropdownState) {
      menu.style.display = "inherit";
      dropdownStateFunc(true);

      document.addEventListener("click", function clickFunc(e) {
        e.preventDefault();

        if (e.target.tagName.toLowerCase() !== "a") {
          menu.style.display = "none";
          dropdownStateFunc(false);
        }

        document.removeEventListener("click", clickFunc);
      });
    }
  }

  return (
    <div className="dropdown-navigation">
      <div className="dropdown-triggers">
        <div className="home-logo-group">
          <HomeLogo onClick={clickHandler} />
          <h4>Orinda Books</h4>
        </div>
        <i className="fas fa-sort-down" onClick={dropdownHandler} />
      </div>
      <ul id="dropdown-menu">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

DropdownNavigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(DropdownNavigation);
