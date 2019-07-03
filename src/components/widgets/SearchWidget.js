import React from "react";
import { Link } from "react-router-dom";

import WidgetTitle from "components/widgets/WidgetTitle";

import SearchImg from "img/widgets/search.png";

function SearchWidget() {
  return (
    <Link
      to="/search"
      className="dashboard-widget-container dashboard-search-widget-container"
    >
      <img src={SearchImg} className="large-widget-pic" alt="search" />
      <WidgetTitle value="Search" />
    </Link>
  );
}

export default SearchWidget;
