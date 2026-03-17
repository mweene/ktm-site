import { useState } from "react";
import data from "../data.json";
import { ArrowLeft, ArrowRight } from "lucide-react";

const dayHeaders = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default function Calendar() {
    //console.log(data);
    const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
    const [month, setMonth] = useState(data.months[monthIndex]);
    const today = new Date().getDate();
    const [events, setEvents] = useState([
        {
            id: 6,
            title: "Women's Prayer Breakfast",
            description: "Morning fellowship and prayer for women.",
            venue: "Church Hall",
            category: "fellowship",
            date: "2026-03-05",
            time: "08:00",
            charge: 80,
        },
    ]);

    const prevMonth = () => {
        if (monthIndex <= 0) return;
        const newIndex = monthIndex - 1;
        setMonthIndex(newIndex);
        setMonth(data.months[newIndex]);
    };

    const nextMonth = () => {
        if (monthIndex >= 11) return;
        const newIndex = monthIndex + 1;
        setMonthIndex(newIndex);
        setMonth(data.months[newIndex]);
    };

    const calendar = {
        grid: [],
    };
    for (let i = 1; i <= 42; i++) {
        calendar.grid.push(i);
    }

    const extractDayFromDate = (dateStr) => Number(dateStr.split("-")[2]);
    const handleClick = (num) => {
        //find the day specified and its events then log them
        const result = month.events.filter(
            (event) => extractDayFromDate(event.date) === num,
        );
        setEvents(result);
    };

    const eventDates = [];
    month.events.forEach((ev) => eventDates.push(extractDayFromDate(ev.date)));

    const index = month.firstDay;

    const isDay = (num) =>
        num <= index || num > month.days + index ? false : true; //date placement mechanism

    const hasEvent = (num) => eventDates.includes(num);

    return (
        <section className="p-8 rounded-4xl bg-neutral-950 text-neutral-100">
            <h2 className="uppercase text-[1.01rem] font-bold text-neutral-500">
                church timeline
            </h2>
            <p className="text-5xl w-4/6">
                Go through our programs for 2026. Set a reminder so you don't
                miss out.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-9 p-8">
                <div className="calendar-wrapper md:col-span-2">
                    <div className="flex place-content-between place-items-center">
                        <p className="text-3xl font-medium capitalize text-nuetral-700">
                            {month.name} <span className="">{data.year}</span>
                        </p>

                        <div className="buttons flex gap-2">
                            <button disabled={monthIndex === 0 ? true : false}>
                                <ArrowLeft
                                    size={20}
                                    onClick={prevMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                            <button>
                                <ArrowRight
                                    size={20}
                                    onClick={nextMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="days grid grid-cols-7 gap-1 mt-6 mb-4">
                        {dayHeaders.map((day) => (
                            <p key={day} className="capitalize">
                                {day}
                            </p>
                        ))}
                    </div>
                    <div className="box-grid grid grid-cols-7 gap-1">
                        {calendar.grid.map((ele) => (
                            <Box
                                key={ele}
                                isDay={isDay(ele)}
                                styles={`${ele - index === today && "border-red-500 border-2"}`}
                                hasEvent={hasEvent(ele - index)}
                                onClick={() => handleClick(ele - index)}
                            >
                                {ele - index}
                            </Box>
                        ))}
                    </div>
                </div>

                <DisplayEvent events={events} />
            </div>
        </section>
    );
}

function Box({ onClick, children, isDay, styles, hasEvent }) {
    const clickable = isDay;
    const classes = `
      box p-6 rounded-lg
      text-center text-neutral-100
      ${styles}
      ${clickable ? "cursor-pointer bg-neutral-700 hover:bg-neutral-200 hover:text-neutral-900" : ""}
    `;
    return (
        <div onClick={clickable ? onClick : undefined} className={classes}>
            {isDay && children}

            {hasEvent ? (
                <div className="circle rounded-full p-1.5 w-fit bg-red-500"></div>
            ) : null}
        </div>
    );
}

function DisplayEvent({ events }) {
    return (
        <div className="rounded-3xl bg-neutral-200 text-neutral-900 relative">
            <div className="event-image bg-sky-600 bg-[url(/src/assets/ktm1.jpg) p-10 py-35 rounded-3xl"></div>

            {events.length > 0 ? (
                events.map((event) => (
                    <div className="grid text p-6 ">
                        <div className="flex flex-wrap text-sm gap-4 asolute top-0">
                            <p className="bg-neutral-400 rounded-full">
                                {event.date}
                            </p>
                            <p className="bg-neutral-400 rounded-full">
                                {event.venue}
                            </p>
                            <p className="bg-neutral-400 w-fit mt-2 rounded-full">
                                {event.charge}
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="text-3xl font-semibold capitalize w-1/2">
                                {event.title}
                            </p>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid text p-6 ">
                    <h1>no event</h1>
                </div>
            )}

            {events === "mweene" && (
                <div className="buttons flex gap-2 p-6">
                    <ArrowLeft size={20} />
                    <ArrowRight size={20} />
                </div>
            )}
        </div>
    );
}
