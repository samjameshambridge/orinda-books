import React from "react";
import { Link } from "react-router-dom";

import WidgetTitle from "components/widgets/WidgetTitle";

import InventoryImg from "img/widgets/inventory.png";

function InventoryWidget() {
  return (
    <Link
      to="/inventory"
      className="dashboard-widget-container dashboard-inventory-widget-container"
    >
      <img src={InventoryImg} className="large-widget-pic" alt="inventory" />
      <WidgetTitle value="Inventory" />
    </Link>
  );
}

export default InventoryWidget;
