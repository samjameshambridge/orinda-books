import React from "react";

import HomeLogo from "components/general/HomeLogo";
import DashboardNavigation from "components/navigation/DashboardNavigation";
import Logout from "components/auth/Logout";

function Sidebar() {
  return (
    <div className="dashboard-sidebar-container font-secondary">
      <HomeLogo className="dashboard-home-logo" />
      <DashboardNavigation />
      <Logout />
    </div>
  );
}

export default Sidebar;
