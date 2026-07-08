import { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import Loader from "./components/Loader";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sanitize = (text) => {
    return text.replace(/[<>]/g, "");
  };
  const addEvent = (title, date) => {
    const newEvent = {
      id: Date.now(),
      title: sanitize(title),
      date,
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);

  
    console.log(
      "[Analytics] User interacted with React Calendar Widget"
    );
  };

  
  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      <h1>React Calendar Widget</h1>

      <Calendar />

      <EventForm addEvent={addEvent} />

      <EventList
        events={events}
        deleteEvent={deleteEvent}
      />
    </div>
  );
}

export default App;
