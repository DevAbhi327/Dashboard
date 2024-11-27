/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EventCardPopup = forwardRef(({ event }, ref) => {
  if (!event) return null;

  return (
    <div className="EventCardPopup" ref={ref}>
      <div className="eventImg">
        <img src={event.img} alt="" />
      </div>
      <div className="detail">
        <h6 className="name">{event.eventName}</h6>
        <p>{event.date}</p>
        <p>{event.eventMode}</p>
        <p>{event.place}</p>
        <div className="personList">
          {/* Add your person images or placeholders here */}
          <div className="circleImg">
            <img src="" alt="" />
          </div>
          <div className="circleImg">
            <img src="" alt="" />
          </div>
          <div className="circleImg count">15+</div>
        </div>
      </div>
    </div>
  );
});

EventCardPopup.propTypes = {
  event: PropTypes.shape({
    img: PropTypes.string,
    eventName: PropTypes.string,
    date: PropTypes.string,
    eventMode: PropTypes.string,
    place: PropTypes.string,
  }),
};

export default EventCardPopup;
