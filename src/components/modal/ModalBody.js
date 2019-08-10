import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// admin modals
import InventoryModal from "components/admin/inventory/modal/InventoryModalBody";
import StaffModal from "components/admin/staff/modal/StaffModal";
import OrdersModal from "components/admin/orders/modal/OrdersModal";
import SalesModal from "components/admin/sales/modal/SalesModal";

function ModalBody({ location: { pathname } }) {
  let modalBody;

  // switch statement assesses what route the user is on and
  // return appropriate modal
  switch (pathname) {
    case "/inventory":
      modalBody = <InventoryModal />;
      break;

    case "/staff":
      modalBody = <StaffModal />;
      break;

    case "/orders":
      modalBody = <OrdersModal />;
      break;

    case "/sales":
      modalBody = <SalesModal />;
      break;

    default:
      return;
  }
  return <React.Fragment>{modalBody}</React.Fragment>;
}

ModalBody.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(ModalBody);
