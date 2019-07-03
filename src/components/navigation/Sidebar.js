import React from "react";
import { Link } from "react-router-dom";

import ProfilePic from "components/general/ProfilePic";
import DashboardNavigation from "components/navigation/DashboardNavigation";
import Logout from "components/auth/Logout";

function Sidebar() {
  return (
    <div className="dashboard-sidebar-container font-secondary">
      <Link to="/profile">
        <ProfilePic className="dashboard-profile-pic" />
      </Link>
      <DashboardNavigation />
      <Logout />
    </div>
  );
}

export default Sidebar;
