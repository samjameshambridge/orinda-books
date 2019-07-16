import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import Orders from "img/widgets/orders.png";
import Staff from "img/widgets/staff.png";
import Sales from "img/widgets/sales.png";
import Inventory from "img/widgets/inventory.png";
import Search from "img/widgets/search.png";

function WidgetNavigation({ location: { pathname } }) {
  return (
    <div className="widget-navigation-container">
      {pathname === "/orders" || (
        <Link to="/orders">
          <img className="navigation-widget" src={Orders} alt="Orders" />
        </Link>
      )}
      {pathname === "/staff" || (
        <Link to="/staff">
          <img className="navigation-widget" src={Staff} alt="Staff" />
        </Link>
      )}
      {pathname === "/sales" || (
        <Link to="/sales">
          <img className="navigation-widget" src={Sales} alt="Sales" />
        </Link>
      )}
      {pathname === "/inventory" || (
        <Link to="/inventory">
          <img className="navigation-widget" src={Inventory} alt="Inventory" />
        </Link>
      )}
      {pathname === "/search" || (
        <Link to="/search">
          <img className="navigation-widget" src={Search} alt="Search" />
        </Link>
      )}
    </div>
  );
}

WidgetNavigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(WidgetNavigation);
