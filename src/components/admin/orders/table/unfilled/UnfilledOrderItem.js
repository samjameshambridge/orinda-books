import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setViewingItem, toggleModal } from "actions/modalActions";

import ViewDetailsButton from "components/buttons/ViewDetailsButton";

function UnfilledOrderItem({
  item,
  item: {
    date,
    book: { title },
    quantity
  },
  setViewingItem,
  toggleModal
}) {
  function clickHandler() {
    setViewingItem(item);
    toggleModal("unfilled-view");
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>
        <ViewDetailsButton
          onClick={() => clickHandler(item)}
          className="inventory-view-details-button"
        />
      </td>
    </tr>
  );
}

UnfilledOrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    toBeFilled: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      isbn: PropTypes.number.isRequired,
      publicationDate: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
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
)(UnfilledOrderItem);
