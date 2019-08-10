import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NoSearchTable from "components/admin/orders/table/filled/NoSearchTable";
import SearchTable from "components/admin/orders/table/filled/SearchTable";
import TableHeading from "components/admin/orders/table/TableHeading";

function FilledTable({ secondary_search_value }) {
  // because there is a filed and unfilled table, there are two search components
  // one for each table
  // secondary_search_value allows the redux store to distinguish between the two values
  // in turn allowing each table to filter itself by subscribing to the correct state slice
  if (secondary_search_value) {
    // secondary_search_value is associated with filled orders
    // the original search_vlue is associated with unfilled orders
    return (
      <table>
        <TableHeading />
        <SearchTable searchVal={secondary_search_value} />
      </table>
    );
  } else {
    return (
      <table>
        <TableHeading />
        <NoSearchTable />
      </table>
    );
  }
}

FilledTable.propTypes = {
  search_value: PropTypes.string,
  secondary_search_value: PropTypes.string
};

const mapStateToProps = ({
  search: { search_value, secondary_search_value }
}) => {
  return {
    search_value,
    secondary_search_value
  };
};

export default connect(mapStateToProps)(FilledTable);
