import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import InventoryItem from "components/admin/inventory/table/InventoryItem";
import Spinner from "components/general/Spinner";

// eslint-disable-next-line react/prop-types
function NoSearchTable({ books }) {
  return (
    <tbody>
      {!isLoaded(books) ? (
        <tr className="spinner-row">
          <td>
            <Spinner />
          </td>
        </tr>
      ) : isEmpty(books) ? (
        <tr>
          <td className="empty-table-cell">
            <h4>You have no books in your inventory!</h4>
          </td>
        </tr>
      ) : (
        books.map(item => {
          return <InventoryItem item={item} key={item.id} />;
        })
      )}
    </tbody>
  );
}

const mapStateToProps = ({
  firestore: {
    ordered: { books }
  }
}) => {
  if (books) {
    return {
      books
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "books", orderBy: ["author"] }])
)(NoSearchTable);
