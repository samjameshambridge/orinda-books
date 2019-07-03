import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { toggleModal } from "actions/modalActions";

import PlusIcon from "components/general/PlusIcon";

function AddOrderGroup({ toggleModal }) {
  function clickHandler() {
    toggleModal("add");
  }
  return (
    <div className="add-order-group" onClick={() => clickHandler()}>
      <h2>Add Order</h2>
      <PlusIcon />
    </div>
  );
}

AddOrderGroup.propTypes = {
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    toggleModal
  }
)(AddOrderGroup);
