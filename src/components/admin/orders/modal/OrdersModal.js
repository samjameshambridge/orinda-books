import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewFilledModal from "components/admin/orders/modal/ViewFilledModal";
import ViewUnfilledModal from "components/admin/orders/modal/ViewUnfilledModal";
import AddOrderModal from "components/admin/orders/modal/AddOrderModal";

function OrdersModal({ modal_type }) {
  let ordersModal;

  switch (modal_type) {
    case "filled-view":
      ordersModal = <ViewFilledModal />;
      break;

    case "unfilled-view":
      ordersModal = <ViewUnfilledModal />;
      break;

    case "add":
      ordersModal = <AddOrderModal />;
      break;

    default:
      return;
  }

  return <div className="orders-modal">{ordersModal}</div>;
}

OrdersModal.propTypes = {
  modal_type: PropTypes.string
};

const mapStateToProps = ({ modal: { modal_type } }) => {
  return {
    modal_type
  };
};

export default connect(
  mapStateToProps,
  null
)(OrdersModal);
