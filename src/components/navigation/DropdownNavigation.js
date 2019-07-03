import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfilePic from "components/general/ProfilePic";

function DropdownNavigation() {
  const [dropdownState, dropdownStateFunc] = useState(false);

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
      <div className="dropdown-triggers" onClick={dropdownHandler}>
        <ProfilePic className="admin-page-profile-pic" />
        <i className="fas fa-sort-down" />
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

export default DropdownNavigation;
