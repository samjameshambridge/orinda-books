import React from "react";
import { Link } from "react-router-dom";

import IconNavigation from "components/navigation/IconNavigation";

function IconSidebar() {
  return (
    <div className="icon-sidebar-container font-secondary">
      <IconNavigation />
      <Link to="/dashboard">
        <i className="fas fa-home fa-2x" />
      </Link>
    </div>
  );
}

export default IconSidebar;
