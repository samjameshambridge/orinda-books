import React from "react";
import { Link } from "react-router-dom";

import WidgetTitle from "components/widgets/WidgetTitle";

import SalesImg from "img/widgets/sales.png";

function SalesWidget() {
  return (
    <Link
      to="/sales"
      className="dashboard-widget-container dashboard-sales-widget-container"
    >
      <img src={SalesImg} className="small-widget-pic" alt="sales" />
      <WidgetTitle value="Sales" />
    </Link>
  );
}

export default SalesWidget;
