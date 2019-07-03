import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NoSearchTable from "components/admin/orders/table/filled/NoSearchTable";
import SearchTable from "components/admin/orders/table/filled/SearchTable";
import TableHeading from "components/admin/orders/table/TableHeading";

function FilledTable({ secondary_search_value }) {
  if (secondary_search_value) {
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
