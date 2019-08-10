import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Calendar from "react-calendar";

import { setDetailEvent } from "actions/eventActions";
import { calendarDateStandardizer } from "helpers/dateFuncs";

function EventsCalendar({ events, setDetailEvent }) {
  function clickHandler(value) {
    setDetailEvent(
      events.filter(event => event.dateOf === calendarDateStandardizer(value))
    );
  }

  // this function gets passed into the calendar and is called for each tile
  function tileHandler({ date }) {
    if (events) {
      // date is passed through a maintainer which ensures the correct date format
      // datesArr is an array of the dates of all the events
      const tileDate = calendarDateStandardizer(date),
        datesArr = events.reduce((acc, curr) => {
          acc.push(curr.dateOf);
          return acc;
        }, []);

      let element;

      // iterate over each date of the array return a red marked circle if there is an event on this date
      // this red circle shows the users what dates he has events on just by looking at the calendar
      datesArr.forEach(item => {
        if (item === tileDate) {
          element = <p className="event-circle">&nbsp;</p>;
        }
      });

      return element;
    } else {
      // if events havent passed through props then return
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
