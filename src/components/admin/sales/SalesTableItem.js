import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setViewingItem, toggleModal } from "actions/modalActions";

import ViewDetailsButton from "components/buttons/ViewDetailsButton";

function SalesTableItem({
  item,
  item: { date, quantity, income },
  setViewingItem,
  toggleModal
}) {
  function clickHandler() {
    // sync the data of the specific item to the redux store
    setViewingItem(item);
    // hide the modal
    toggleModal("view");
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{quantity}</td>
      <td>{income}</td>
      <td>
        <ViewDetailsButton
          onClick={() => clickHandler(item)}
          className="inventory-view-details-button"
        />
      </td>
    </tr>
  );
}

SalesTableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    income: PropTypes.string.isRequired,
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      isbn: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired
    })
  }),
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    setViewingItem,
    toggleModal
  }
)(SalesTableItem);
