import { useState } from "react";
import "../../styles/events/AddEvents.css";
import AddEventsPopup from "../../components/ui/allPopups/AddEventsPopup";
import eventImg1 from "../../assets/events/eventImg1.png";
import eventImg2 from "../../assets/events/eventImg2.png";
import eventImg3 from "../../assets/events/eventImg3.png";
import eventImg4 from "../../assets/events/eventImg4.png";
import EventListCard from "../../components/events/EventListCard";
import MyEventCalendar from "../../components/events/MyEventCalendar";
const EventCalendar = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  //   dummy event list
  const eventList = [
    {
      img: eventImg1,
      eventName: "Design Conference",
      date: "Today 07:19 AM",
      eventMode: "Online  Events",
      place: "India",
    },
    {
      img: eventImg2,
      eventName: "Rakhi Festival",
      date: "16 Octuber 2019 at 5.00 PM",
      eventMode: "Online  Events",
      place: "India",
    },
    {
      img: eventImg3,
      eventName: "Diwali Festival",
      date: "20-22 Octuber 2019 at 8.00 PM",
      eventMode: "Online  Events",
      place: "India",
    },
    {
      img: eventImg4,
      eventName: "Muharram Festival",
      date: "25 Octuber 2019 at 10.00 PM",
      eventMode: "Online  Events",
      place: "India",
    },
  ];
  return (
    <>
      <div className="EventCalendar">
        <div className="EventCalendar_inner">
          <div className="add_container innerBox">
            <div className="centerBtns">
              <button
                className="submitBtn"
                onClick={() => setShowAddEvent(true)}
              >
                + Add New Event
              </button>
            </div>
            <h6 className="heading">You are going to</h6>
            <div className="card_container">
              {eventList?.map((e, i) => {
                return (
                  <EventListCard
                    date={e.date}
                    eventMode={e.eventMode}
                    eventName={e.eventName}
                    img={e.img}
                    place={e.place}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
          <div className="calendar_container innerBox">
            <MyEventCalendar />
          </div>
        </div>
      </div>
      {/* add event popup call */}

      <AddEventsPopup
        show={showAddEvent}
        onHide={() => setShowAddEvent(false)}
      />
    </>
  );
};

export default EventCalendar;
