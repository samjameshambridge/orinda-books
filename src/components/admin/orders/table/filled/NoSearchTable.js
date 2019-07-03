import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";

import FilledOrderItem from "components/admin/orders/table/filled/FilledOrderItem";
import Spinner from "components/general/Spinner";

function NoSearchTable({ filledOrders }) {
  return (
    <tbody>
      {!isLoaded(filledOrders) ? (
        <tr className="spinner-row">
          <td className="spinner-cell">
            <Spinner />
          </td>
        </tr>
      ) : isEmpty(filledOrders) ? (
        <tr>
          <td className="empty-table-cell">
            <h4>You have no Filled Orders</h4>
          </td>
        </tr>
      ) : (
        filledOrders.map(item => {
          return <FilledOrderItem item={item} key={item.id} />;
        })
      )}
    </tbody>
  );
}

NoSearchTable.propTypes = {
  filledOrders: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({
  firestore: {
    ordered: { filledOrders }
  }
}) => {
  if (filledOrders) {
    return {
      filledOrders
    };
  } else {
    return {};
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "filledOrders" }])
)(NoSearchTable);
