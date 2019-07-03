import React from "react";
import PropTypes from "prop-types";

function AdminTitle({ value }) {
  return <h2 className="admin-page-title">{value}</h2>;
}

AdminTitle.propTypes = {
  value: PropTypes.string.isRequired
};

export default AdminTitle;
