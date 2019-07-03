import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ViewDetailsButton from "components/buttons/ViewDetailsButton";

import { setViewingItem, toggleModal } from "actions/modalActions";

function InventoryItem({
  item,
  item: { title, author, quantity, imageLocation, salePrice },
  setViewingItem,
  toggleModal
}) {
  function clickHandler(item) {
    setViewingItem(item);
    toggleModal("view");
  }

  return (
    <tr>
      <td>
        <img src={imageLocation} className="iventory-item-img" alt="book" />
      </td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>{salePrice}</td>
      <td>
        <ViewDetailsButton onClick={() => clickHandler(item)} />
      </td>
    </tr>
  );
}

InventoryItem.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    isbn: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    salePrice: PropTypes.string.isRequired
  }),
  setViewingItem: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { setViewingItem, toggleModal }
)(InventoryItem);
