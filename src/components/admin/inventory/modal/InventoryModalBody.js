import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SummaryModal from "components/admin/inventory/modal/SummaryModal";
import ViewItemModal from "components/admin/inventory/modal/ViewItemModal";

function InventoryModalBody({ modal_type }) {
  let inventoryModalBody;

  // modal_type determines whether to display the inventory summary or an view item modal
  switch (modal_type) {
    case "summary":
      inventoryModalBody = <SummaryModal />;
      break;

    case "view":
      inventoryModalBody = <ViewItemModal />;
      break;

    default:
      return;
  }

  return <div className="inventory-modal">{inventoryModalBody}</div>;
}

InventoryModalBody.propTypes = {
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
)(InventoryModalBody);
