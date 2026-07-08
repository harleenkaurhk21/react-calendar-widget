import { useState } from "react";

function EventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    if (title.trim() === "") {
      setTitleError(true);
      valid = false;
    } else {
      setTitleError(false);
    }

    if (date === "") {
      setDateError(true);
      valid = false;
    } else {
      setDateError(false);
    }

    if (!valid) return;

    addEvent(title, date);

    setTitle("");
    setDate("");
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <h2>Add New Event</h2>

      <div className="form-group">
        <label htmlFor="title">Event Title</label>

        <input
          id="title"
          type="text"
          aria-label="Event title"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={titleError ? "error-input" : ""}
        />

        {titleError && (
          <small className="error-text">
            Title is required
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="date">Event Date</label>

        <input
          id="date"
          type="date"
          aria-label="Event date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={dateError ? "error-input" : ""}
        />

        {dateError && (
          <small className="error-text">
            Date is required
          </small>
        )}
      </div>

      <button
        type="submit"
        aria-label="Add Event"
      >
        Add Event
      </button>
    </form>
  );
}

export default EventForm;
