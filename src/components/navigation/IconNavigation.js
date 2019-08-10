import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

function IconNavigation({ location: { pathname } }) {
  // if the user is on a particular route
  // then the icon for the route will not be shown
  // for example, if user is on 'tasks' page, then the option to navigate to the tasks page
  // through the tasks icon will not be displayed
  return (
    <ul className="text-theme-blue">
      {pathname === "/profile" || pathname === "/profile/edit" || (
        <li>
          <Link to="/profile">
            <i className="fas fa-user fa-2x" />
          </Link>
        </li>
      )}
      {pathname === "/tasks" || (
        <li>
          <Link to="/tasks">
            <i className="fas fa-feather-alt fa-2x" />
          </Link>{" "}
        </li>
      )}
      {pathname === "/events" || (
        <li>
          <Link to="/events">
            <i className="fas fa-calendar-alt fa-2x" />
          </Link>{" "}
        </li>
      )}
      {pathname === "/settings" || pathname === "/settings/edit" || (
        <li>
          <Link to="/settings">
            <i className="fas fa-cog fa-2x" />
          </Link>{" "}
        </li>
      )}
    </ul>
  );
}

IconNavigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(IconNavigation);
