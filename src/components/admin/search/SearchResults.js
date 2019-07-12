import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import SearchItem from "components/admin/search/SearchItem";

function SearchResults({
  ordered: {
    filledOrdersFiltered,
    unfilledOrdersFiltered,
    authorFiltered,
    titleFiltered,
    firstNameFiltered,
    fullNameFiltered
  },
  search_value
}) {
  let results;

  if (
    filledOrdersFiltered ||
    unfilledOrdersFiltered ||
    authorFiltered ||
    titleFiltered ||
    firstNameFiltered ||
    fullNameFiltered
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
    } else if (authorFiltered && authorFiltered.length) {
      results = (
        <React.Fragment>
          {authorFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (titleFiltered && titleFiltered.length) {
      results = (
        <React.Fragment>
          {titleFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (firstNameFiltered && firstNameFiltered.length) {
      results = (
        <React.Fragment>
          {firstNameFiltered.map(item => (
            <SearchItem key={item.id} item={item} />
          ))}
        </React.Fragment>
      );
    } else if (search_value) {
      results = <h5 className="empty-search-message">No results found!</h5>;
    }
  } else if (fullNameFiltered && fullNameFiltered.length) {
    results = (
      <React.Fragment>
        {fullNameFiltered.map(item => (
          <SearchItem key={item.id} item={item} />
        ))}
      </React.Fragment>
    );
  } else if (search_value) {
    results = <h5 className="empty-search-message">No results found!</h5>;
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
