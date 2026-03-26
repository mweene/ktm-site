import { useState } from "react";
import data from "../data.json";
import { ArrowLeft, ArrowRight } from "lucide-react";

const dayHeaders = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default function Calendar() {
    //console.log(data);
    const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
    const [month, setMonth] = useState(data.months[monthIndex]);
    const today = new Date().getDate();
    const [events, setEvents] = useState(month.events);

    const prevMonth = () => {
        if (monthIndex <= 0) return;
        const newIndex = monthIndex - 1;
        setMonthIndex(newIndex);
        setMonth(data.months[newIndex]);
        setEvents(data.months[newIndex].events);
    };

    const nextMonth = () => {
        if (monthIndex >= 11) return;
        const newIndex = monthIndex + 1;
        setMonthIndex(newIndex);
        setMonth(data.months[newIndex]);
        setEvents(data.months[newIndex].events);
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
        //setEvents(result);
    };

    const eventDates = [];
    month.events.forEach((ev) => eventDates.push(extractDayFromDate(ev.date)));

    const index = month.firstDay;

    const isDay = (num) =>
        num <= index || num > month.days + index ? false : true; //date placement mechanism

    const hasEvent = (num) => eventDates.includes(num);

    return (
        <section className="" id="programs">
            <p className="uppercase">church timeline</p>
            <h2 className="text-5xl font-semibold">Programs & events for 2026</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-9">
                <div className="calendar-wrapper">
                    <div className="flex place-content-between place-items-center">
                        <p className="text-2xl font-semibold capitalize text-nuetral-700">
                            {month.name} <span className="">{data.year}</span>
                        </p>

                        <div className="buttons flex gap-4">
                            <button 
                                disabled={monthIndex === 0 ? true : false}
                                className="p-2 bg-neutral-900"
                            >
                                <ArrowLeft
                                    size={20}
                                    color="white"
                                    onClick={prevMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                            <button className="p-2 bg-neutral-900">
                                <ArrowRight
                                    size={20}
                                    color="white"
                                    onClick={nextMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="days grid grid-cols-7 gap-1 mt-6 mb-4">
                        {dayHeaders.map((day) => (
                            <p key={day} className="uppercase">
                                {day}
                            </p>
                        ))}
                    </div>
                    <div className="box-grid grid grid-cols-7 gap-1">
                        {calendar.grid.map((ele) => (
                            <Box
                                key={ele}
                                isDay={isDay(ele)}
                                styles={`${ele - index === today && "bg-neutral-900"}`}
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
      box p-4 rounded-lg
      text-center text-neutral-100
      grid place-content-center place-items-center gap-1
      ${styles}
      ${clickable ? "cursor-pointer bg-neutral-700 hover:bg-neutral-600" : ""}
    `;
    return (
        <div onClick={clickable ? onClick : undefined} className={classes}>
            {isDay && children}

            {hasEvent ? (
                <div className="circle rounded-full p-1 w-fit bg-white"></div>
            ) : null}
        </div>
    );
}

function DisplayEvent({ events }) {
    return (
        <div className=" text-neutral-900 grid gap-2">
            {events.length > 0 ? (
                events.map((event) => (
                    <div key={event.id} className="grid text p-6 bg-neutral-200 rounded-2xl">
                        <div className="flex flex-wrap place-content-between text-sm gap-4 asolute top-0">
                            <div className="grid gap-2">
                                <p className="font-medium">
                                {event.date}
                                </p>
                                <p className="font-medium">
                                    {event.time }
                                </p>
                            </div>
                            
                            <div className="grid gap-1">
                                <p className="font-medium">
                                    {event.venue}
                                </p>
                                <p className="font-medium">
                                    {event.charge > 0 ? `K${event.charge}` : 'free'}
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-2xl font-semibold capitalize w-3/5">
                                {event.title}
                            </p>
                            <p>{event.description}</p>
                            <p 
                                className={`uppercase text-[0.8rem] mt-2 py-0.5
                                font-medium            
                                px-3 rounded-full bg-neutral-400 w-fit`}
                            >
                                {event.category}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid text p-6 ">
                    <h1>no event</h1>
                </div>
            )}
        </div>
    );
}
