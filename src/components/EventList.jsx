function EventList({ events, deleteEvent }) {

  if (events.length === 0) {
    return (
      <div className="event-list">
        <h2>Event List</h2>

        <div className="empty-state">
          <p>No data found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event-list">
      <h2>Event List</h2>

      {events.map((event) => (
        <div className="event-card" key={event.id}>
          <div>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
          </div>

          <button
            onClick={() => deleteEvent(event.id)}
            aria-label={`Delete ${event.title}`}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
