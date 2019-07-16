import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function ViewEventContent({ view_item: { dateOf, notes, time, title } }) {
  return (
    <div className="view-event-modal-content">
      <h3>{title}</h3>
      <p>
        <span>Date: </span>
        {dateOf}
      </p>
      <p>
        <span>Starts At: </span>
        {time}
      </p>
      <h4>Notes</h4>
      <p>{notes}</p>
    </div>
  );
}

ViewEventContent.propTypes = {
  view_item: PropTypes.shape({
    dateOf: PropTypes.string.isRequired,
    notes: PropTypes.string,
    time: PropTypes.string,
    title: PropTypes.string.isRequired
  })
};

const mapStateToProps = ({ modal: { view_item } }) => {
  return {
    view_item
  };
};

export default connect(mapStateToProps)(ViewEventContent);
