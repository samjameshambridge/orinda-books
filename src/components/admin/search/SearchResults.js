import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SearchItem from "components/admin/search/SearchItem";

function SearchResults({ ordered: { search_data }, search_value }) {
  let results;

  if (search_data) {
    if (search_data.length) {
      results = (
        <React.Fragment>
          {search_data.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (search_value) {
      results = <h5 className="empty-search-message">No results found!</h5>;
    }
  } else {
    results = <div />;
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
