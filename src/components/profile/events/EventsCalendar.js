import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Calendar from "react-calendar";

import { setDetailEvent } from "actions/eventActions";
import { calendarDateStandardizer } from "helpers/dateFuncs";

function EventsCalendar({ events, setDetailEvent }) {
  if (events) {
    var datesArr = events.reduce((acc, curr) => {
      acc.push(curr.dateOf);
      return acc;
    }, []);
  }

  function clickHandler(value) {
    setDetailEvent(
      events.filter(event => event.dateOf === calendarDateStandardizer(value))
    );
  }

  function tileHandler({ date }) {
    if (events) {
      const tileDate = calendarDateStandardizer(date);

      let element;

      datesArr.forEach(item => {
        if (item === tileDate) {
          element = <p className="event-circle">&nbsp;</p>;
        }
      });

      return element;
    } else {
      return;
    }
  }
  return (
    <Calendar
      className="events-calendar"
      minDetail="month"
      onClickDay={value => clickHandler(value)}
      showNeighboringMonth={false}
      tileContent={tileHandler}
    />
  );
}

EventsCalendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      dateOf: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  setDetailEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    setDetailEvent
  }
)(EventsCalendar);
