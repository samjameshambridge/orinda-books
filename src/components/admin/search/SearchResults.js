import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SearchItem from "components/admin/search/SearchItem";

function SearchResults({
  ordered: {
    filledOrdersFiltered,
    unfilledOrdersFiltered,
    inventoryAuthorFiltered,
    inventoryTitleFiltered,
    staffFiltered
  },
  search_value
}) {
  let results;

  if (
    filledOrdersFiltered ||
    unfilledOrdersFiltered ||
    inventoryAuthorFiltered ||
    inventoryTitleFiltered ||
    staffFiltered
  ) {
    if (unfilledOrdersFiltered && unfilledOrdersFiltered.length) {
      results = (
        <React.Fragment>
          {unfilledOrdersFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (filledOrdersFiltered && filledOrdersFiltered.length) {
      results = (
        <React.Fragment>
          {filledOrdersFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (inventoryAuthorFiltered && inventoryAuthorFiltered.length) {
      results = (
        <React.Fragment>
          {inventoryAuthorFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (inventoryTitleFiltered && inventoryTitleFiltered.length) {
      results = (
        <React.Fragment>
          {inventoryTitleFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (staffFiltered && staffFiltered.length) {
      results = (
        <React.Fragment>
          {staffFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (search_value) {
      results = <h5 className="empty-search-message">No results found!</h5>;
    }
  }
  return <React.Fragment>{results}</React.Fragment>;
}

SearchResults.propTypes = {
  ordered: PropTypes.object.isRequired,
  search_value: PropTypes.string
};

const mapStateToProps = ({
  firestore: { ordered },
  search: { search_value }
}) => {
  return { ordered, search_value };
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
