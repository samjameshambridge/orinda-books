import React from "react";

import OrdersWidget from "components/widgets/OrdersWidget";
import StaffWidget from "components/widgets/StaffWidget";
import SalesWidget from "components/widgets/SalesWidget";
import InventoryWidget from "components/widgets/InventoryWidget";
import SearchWidget from "components/widgets/SearchWidget";

export default function Widgets() {
  return (
    <div className="dashboard-widgets-container">
      <OrdersWidget />
      <StaffWidget />
      <SalesWidget />
      <InventoryWidget />
      <SearchWidget />
    </div>
  );
}
