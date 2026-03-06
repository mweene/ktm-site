import { useState } from "react"

const events = [
  {id: 1, name: 'investure', date: '11-01-2026', venue: 'mandevu main', club: 'master guide'},
  {id: 2, name: 'week of prayer', date: '20-02-2026', venue: 'local church', club: 'pathfinders'},
  {id: 3, name: 'camp meeting', date: '13-10-2026', venue: '21 miles, chibombo', club: 'church'},
  {id: 4, name: 'community service', date: '04-04-2026', venue: 'garden police', club: 'dorcas'},
]

export default function Calendar() {
  const [event, setEvent] = useState({});
  const [activeDate, setActiveDate] = useState(null);

  const handleEventChange = (id) => {
    const result = events.find(e => e.id === id);
    setEvent(result);
    setActiveDate(id);
  };

  return (
    <section className="">
      <h2 className="">Calendar</h2>

      <div className="days">
        {events.map(e => (
          <Day 
            key={e.id} 
            eventObject={e} 
            onClick={() => handleEventChange(e.id)}
            isActive={activeDate === e.id}
          />
        ))}
      </div>

      <div className="card">
        {event.name}
      </div>
    </section>
  )
}

function Day({eventObject, onClick, isActive}) {
  return (
    <button className={`border ${isActive && "border-3"}`} onClick={onClick}>
      {eventObject.id}
    </button>
  )
}