import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import HomeLogo from "components/general/HomeLogo";
import DashboardNavigation from "components/navigation/DashboardNavigation";
import Logout from "components/auth/Logout";

function Sidebar({ history: { push } }) {
  return (
    <div className="dashboard-sidebar-container font-secondary">
      <div className="dashboard-logo-group" onClick={() => push("/profile")}>
        <HomeLogo className="dashboard-home-logo" />
        <h3>Orinda Books</h3>
      </div>
      <DashboardNavigation />
      <Logout />
    </div>
  );
}

Sidebar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(Sidebar);
