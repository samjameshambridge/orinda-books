import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import TableHeading from "components/admin/sales/TableHeading";
import SalesTableItem from "components/admin/sales/SalesTableItem";
import Spinner from "components/general/Spinner";

function SalesTable({ sales }) {
  // isLoaded determines if the fetch firebase request is being processed
  // isEmpty determines if the fetch firebase request has returned empty
  // if the request is loading, display the spinner
  // if the request is empty, display a title saying so
  // else iterate over the data and display it
  return (
    <table>
      <TableHeading />
      <tbody>
        {!isLoaded(sales) ? (
          <tr className="spinner-row">
            <td>
              <Spinner />
            </td>
          </tr>
        ) : isEmpty(sales) ? (
          <tr>
            <td className="empty-table-cell">
              <h4>You have no recorded sales</h4>
            </td>
          </tr>
        ) : (
          sales.map(item => {
            return <SalesTableItem item={item} key={item.id} />;
          })
        )}
      </tbody>
    </table>
  );
}

SalesTable.propTypes = {
  sales: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({
  firestore: {
    ordered: { sales }
  }
}) => {
  if (sales) {
    return {
      sales
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "sales" }])
)(SalesTable);
