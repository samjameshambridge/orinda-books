import React from "react";
import PropTypes from "prop-types";

function WidgetTitle({ value }) {
  return <h2 className="text-theme-blue">{value}</h2>;
}

WidgetTitle.propTypes = {
  value: PropTypes.string.isRequired
};

export default WidgetTitle;
