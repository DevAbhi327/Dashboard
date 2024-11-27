/* eslint-disable react/prop-types */

const EventListCard = ({ img, eventName, date, eventMode, place }) => {
  return (
    <>
      <div className="EventListCard">
        <div className="eventImg"><img src={img} alt="" /></div>
        <div className="detail">
            <h6 className="name">{eventName}</h6>
            <p>{date}</p>
            <p>{eventMode}</p>
            <p>{place}</p>
            <div className="personList">
                <div className="circleImg"><img src="" alt="" /></div>
                <div className="circleImg"><img src="" alt="" /></div>
                <div className="circleImg count">15+</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default EventListCard;
