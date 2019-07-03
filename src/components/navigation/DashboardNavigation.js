import React from "react";
import { Link } from "react-router-dom";

function DashboardNavigation() {
  return (
    <ul>
      <li>
        <Link to="/profile">
          <span>Profile</span> <i className="fas fa-user" />
        </Link>
      </li>
      <li>
        <Link to="/tasks">
          <span>Tasks</span> <i className="fas fa-feather-alt" />
        </Link>
      </li>
      <li>
        <Link to="/events">
          <span>Events</span> <i className="fas fa-calendar-alt" />
        </Link>
      </li>
      <li>
        <Link to="/settings">
          <span>Settings</span> <i className="fas fa-cog" />
        </Link>
      </li>
    </ul>
  );
}

export default DashboardNavigation;
