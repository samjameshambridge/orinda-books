import React from "react";
import { Link } from "react-router-dom";

import WidgetTitle from "components/widgets/WidgetTitle";

import StaffImg from "img/widgets/staff.png";

function StaffWidget() {
  return (
    <Link
      to="/staff"
      className="dashboard-widget-container dashboard-staff-widget-container"
    >
      <img
        src={StaffImg}
        className="small-widget-pic staff-widget-pic"
        alt="staff"
      />
      <WidgetTitle value="Staff" />
    </Link>
  );
}

export default StaffWidget;
