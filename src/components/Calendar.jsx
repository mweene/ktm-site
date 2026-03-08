const month = {
    name: "february",
    days: 31,
    firstDay: "saturday",
    events: [
        {
            id: "ktm001",
            name: "pathfinder camporee",
            date: "2026-02-05",
            venue: "munda wanga gardens",
        },
        {
            id: "ktm002",
            name: "adventure tea party",
            date: "2026-02-10",
            venue: "local church",
        },
        {
            id: "ktm003",
            name: "dorcas rally",
            date: "2026-02-12",
            venue: "local church",
        },
        {
            id: "ktm004",
            name: "youth fellowship",
            date: "2026-02-23",
            venue: "villa sda church",
        },
    ],
};

const dayHeaders = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
];

const extractDayFromDate = (dateStr) => Number(dateStr.split("-")[2]);

export default function Calendar() {
    const calendar = {
        grid: [],
    };
    for (let i = 1; i <= 42; i++) {
        calendar.grid.push(i);
    }

    const handleClick = (num) => {
      const result = month.events.find(event => extractDayFromDate(event.date) === num);
      result ? console.log(result) : console.log('no event')
    }


    const index = dayHeaders.findIndex((day) => day === month.firstDay);

    const isFilled = (num) =>
        num <= index || num > month.days + index ? false : true; //date placement mechanism

    return (
        <section className="w-fit">
            <div className="days grid grid-cols-7 gap-0.5">
                {dayHeaders.map((day) => (
                    <p key={day}>{day}</p>
                ))}
            </div>
            <div className="box-grid grid grid-cols-7 gap-0.5">
                {calendar.grid.map((ele) => (
                    <Box
                        key={ele}
                        onClick={() => handleClick(ele - index)}
                        isFilled={isFilled(ele)}
                    >
                        {ele - index}
                    </Box>
                ))}
            </div>
        </section>
    );
}

function Box({ onClick, children, isFilled }) {
    return (
        <div
            onClick={onClick}
            className={`
              box p-6 border border-neutral-400 rounded-lg
              cursor-pointer text-center
              ${isFilled ? "bg-neutral-200" : null}
            `}
        >
            {isFilled ? children : " "}
        </div>
    );
}
