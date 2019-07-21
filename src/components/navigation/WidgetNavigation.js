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
        <Link to="/orders" className="widget-title-group">
          <img className="navigation-widget" src={Orders} alt="Orders" />
          <h5>Orders</h5>
        </Link>
      )}
      {pathname === "/staff" || (
        <Link to="/staff" className="widget-title-group">
          <img className="navigation-widget" src={Staff} alt="Staff" />
          <h5>Staff</h5>
        </Link>
      )}
      {pathname === "/sales" || (
        <Link to="/sales" className="widget-title-group">
          <img className="navigation-widget" src={Sales} alt="Sales" />
          <h5>Sales</h5>
        </Link>
      )}
      {pathname === "/inventory" || (
        <Link to="/inventory" className="widget-title-group">
          <img className="navigation-widget" src={Inventory} alt="Inventory" />
          <h5>Inventory</h5>
        </Link>
      )}
      {pathname === "/search" || (
        <Link to="/search" className="widget-title-group">
          <img className="navigation-widget" src={Search} alt="Search" />
          <h5>Search</h5>
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
