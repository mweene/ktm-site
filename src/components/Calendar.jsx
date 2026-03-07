import { useState, useEffect } from "react";

const events = [
    {
        id: 1,
        name: "investure",
        date: "11-01-2026",
        venue: "mandevu main",
        club: "master guide",
    },
    {
        id: 2,
        name: "week of prayer",
        date: "20-02-2026",
        venue: "local church",
        club: "pathfinders",
    },
    {
        id: 3,
        name: "camp meeting",
        date: "13-10-2026",
        venue: "21 miles, chibombo",
        club: "church",
    },
    {
        id: 4,
        name: "community service",
        date: "04-04-2026",
        venue: "garden police",
        club: "dorcas",
    },
];

function Calendar2() {
    const [event, setEvent] = useState({});
    const [activeDate, setActiveDate] = useState(null);

    const handleEventChange = (id) => {
        const result = events.find((e) => e.id === id);
        setEvent(result);
        setActiveDate(id);
    };

    return (
        <section className="">
            <h2 className="">Calendar</h2>

            <div>
                <div className="days">
                    {events.map((e) => (
                        <Day
                            key={e.id}
                            eventObject={e}
                            onClick={() => handleEventChange(e.id)}
                            isActive={activeDate === e.id}
                        />
                    ))}
                </div>

                <div className="card">{event.name}</div>
            </div>

            <Month />
        </section>
    );
}

function Day({ eventObject, onClick, isActive }) {
    return (
        <button
            className={`border ${isActive && "border-3"}`}
            onClick={onClick}
        >
            {eventObject.id}
        </button>
    );
}


const months = [
    {
        name: 'january',
        firstDay: 'tuesday',
        totalDays: 31
    }
]

const Calendar = () => {
    const calendar = { 
        grid: [], 
        daysMap: [
            'sunday',
            'monday', 
            'tuesday', 
            'wednesday', 
            'thursday', 
            'friday', 
            'saturday'
        ]
    }
    for(let i = 1; i <= 42; i++) {calendar.grid.push(i)}

    const handleClick = (e) => console.log(e);
    const isEven = num => (num <= 4 || num > 39) ? false : true; //date placement mechanism

    return (
        <section className="w-fit">
            <div className="days grid grid-cols-7 gap-0.5">
                <p>sunday</p>
                <p>monday</p>
                <p>tuesday</p>
                <p>wednesday</p>
                <p>thursday</p>
                <p>friday</p>
                <p>saturday</p>
            </div>
            <div className="box-grid grid grid-cols-7 gap-0.5">
                {calendar.grid.map(ele => (
                    <Box 
                        key={ele}
                        onClick={() => handleClick(ele)}
                        isEven={isEven(ele)}
                    >
                            {ele}
                    </Box>
                ))}
            </div>
        </section>
    )
}

const Box = ({onClick, children, isEven}) => (
    <div
        onClick={onClick} 
        className={`box p-6 border border-neutral-400 rounded-lg text-center ${isEven ? "bg-neutral-200" : null}`}
    >
        {isEven ? children: " "}
    </div>
)

export default Calendar;