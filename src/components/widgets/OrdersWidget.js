import React from "react";
import { Link } from "react-router-dom";

import WidgetTitle from "components/widgets/WidgetTitle";

import OrdersImg from "img/widgets/orders.png";

function OrdersWidget() {
  return (
    <Link
      to="/orders"
      className="dashboard-widget-container dashboard-orders-widget-container"
    >
      <img src={OrdersImg} className="small-widget-pic" alt="orders" />
      <WidgetTitle value="Orders" />
    </Link>
  );
}

export default OrdersWidget;
