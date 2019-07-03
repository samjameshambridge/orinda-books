import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NoSearchTable from "components/admin/orders/table/unfilled/NoSearchTable";
import SearchTable from "components/admin/orders/table/unfilled/SearchTable";
import TableHeading from "components/admin/orders/table/TableHeading";

function UnfilledTable({ search_value }) {
  if (search_value) {
    return (
      <table>
        <TableHeading />
        <SearchTable searchVal={search_value} />
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

UnfilledTable.propTypes = {
  search_value: PropTypes.string
};

const mapStateToProps = ({ search: { search_value } }) => {
  return {
    search_value
  };
};

export default connect(mapStateToProps)(UnfilledTable);
