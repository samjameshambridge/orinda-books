import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NoSearchTable from "components/admin/inventory/table/NoSearchTable";
import SearchTable from "components/admin/inventory/table/SearchTable";
import TableHeadings from "components/admin/inventory/table/TableHeadings";

// eslint-disable-next-line react/prop-types
function InventoryTable({ search_value }) {
  // if there is a a search value then return a filtered version of the table
  if (search_value) {
    return (
      <table className="inventory-table">
        <TableHeadings />
        <SearchTable searchVal={search_value} />
      </table>
    );
  } else {
    // else return the unfiltered version of the table
    return (
      <table className="inventory-table">
        <TableHeadings />
        <NoSearchTable />
      </table>
    );
  }
}

InventoryTable.propTypes = {
  firestore: PropTypes.object,
  search_value: PropTypes.string
};

const mapStateToProps = ({ search: { search_value } }) => {
  return {
    search_value
  };
};

export default connect(mapStateToProps)(InventoryTable);
