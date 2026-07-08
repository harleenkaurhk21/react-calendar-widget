import "./Calendar.css";

function Calendar() {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="calendar-card">
      <h2>Today's Date</h2>

      <p className="today-date">
        {today.toLocaleDateString("en-US", options)}
      </p>

      <div className="calendar-note">
        <p>Select a date below to add your event.</p>
      </div>
    </div>
  );
}

export default Calendar;
