import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/events/MyEventCalendar.css";
import EventCardPopup from "./EventCardPopup";
import { useState, useRef, useEffect } from "react";
import eventImg1 from "../../assets/events/eventImg1.png";
import eventImg2 from "../../assets/events/eventImg2.png";
import eventImg3 from "../../assets/events/eventImg3.png";
import eventImg4 from "../../assets/events/eventImg4.png";

// Initialize the localizer with moment
const localizer = momentLocalizer(moment);

const getRandomDateInMonth = () => {
  const startOfMonth = moment().startOf("month");
  const endOfMonth = moment().endOf("month");
  const randomDate = moment(startOfMonth).add(
    Math.floor(Math.random() * (endOfMonth.date() - startOfMonth.date() + 1)),
    "days"
  );
  return randomDate;
};

// Define the events
const events = [
  {
    id: 0,
    title: "Meeting",
    start: getRandomDateInMonth().hours(8).minutes(0).toDate(),
    end: getRandomDateInMonth().hours(10).minutes(0).toDate(),
    img: eventImg1,
    eventName: "Design Conference",
    date: "Today 07:19 AM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 1,
    title: "Lunch",
    start: getRandomDateInMonth().hours(12).minutes(0).toDate(),
    end: getRandomDateInMonth().hours(13).minutes(0).toDate(),
    img: eventImg1,
    eventName: "Design Conference",
    date: "Today 07:19 AM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 2,
    title: "Coding",
    start: getRandomDateInMonth().hours(14).minutes(0).toDate(),
    end: getRandomDateInMonth().hours(17).minutes(0).toDate(),
    img: eventImg2,
    eventName: "Rakhi Festival",
    date: "16 Octuber 2019 at 5.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },

  {
    id: 3,
    title: "Design Review",
    start: getRandomDateInMonth().hours(9).minutes(30).toDate(),
    end: getRandomDateInMonth().hours(11).minutes(0).toDate(),
    img: eventImg1,
    eventName: "Design Conference",
    date: "Today 07:19 AM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 4,
    title: "Project Planning",
    start: getRandomDateInMonth().hours(11).minutes(0).toDate(),
    end: getRandomDateInMonth().hours(12).minutes(30).toDate(),
    img: eventImg2,
    eventName: "Rakhi Festival",
    date: "16 Octuber 2019 at 5.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 5,
    title: "Team Meeting",
    start: getRandomDateInMonth().hours(13).minutes(30).toDate(),
    end: getRandomDateInMonth().hours(15).minutes(0).toDate(),
    img: eventImg3,
    eventName: "Diwali Festival",
    date: "20-22 Octuber 2019 at 8.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 6,
    title: "Code Review",
    start: getRandomDateInMonth().hours(15).minutes(0).toDate(),
    end: getRandomDateInMonth().hours(16).minutes(30).toDate(),
    img: eventImg4,
    eventName: "Muharram Festival",
    date: "25 Octuber 2019 at 10.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 7,
    title: "Client Call",
    start: getRandomDateInMonth().hours(16).minutes(30).toDate(),
    end: getRandomDateInMonth().hours(17).minutes(30).toDate(),
    img: eventImg3,
    eventName: "Diwali Festival",
    date: "20-22 Octuber 2019 at 8.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 8,
    title: "Documentation",
    start: getRandomDateInMonth().hours(10).minutes(0).toDate(),
    end: getRandomDateInMonth().hours(11).minutes(30).toDate(),
    img: eventImg4,
    eventName: "Muharram Festival",
    date: "25 Octuber 2019 at 10.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },
  {
    id: 9,
    title: "Lunch with Team",
    start: getRandomDateInMonth().hours(12).minutes(30).toDate(),
    end: getRandomDateInMonth().hours(13).minutes(30).toDate(),
    img: eventImg4,
    eventName: "Muharram Festival",
    date: "25 Octuber 2019 at 10.00 PM",
    eventMode: "Online  Events",
    place: "India",
  },
];

const MyEventCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Handle click on event
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    togglePopup(); // Toggle popup visibility
  };

  // Close popup when clicking outside of it
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Calendar
        events={events}
        localizer={localizer}
        components={{
          eventWrapper: ({ event, children }) => (
            <div
              onClick={() => handleEventClick(event)}
              onContextMenu={(e) => {
                // alert(`${event.title} is clicked.`);
                e.preventDefault();
              }}
            >
              {children}
            </div>
          ),
        }}
      />
      {isOpen && selectedEvent && (
        <EventCardPopup ref={popupRef} event={selectedEvent} />
      )}
    </>
  );
};

export default MyEventCalendar;
