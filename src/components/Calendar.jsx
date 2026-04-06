import { useState } from "react";
import data from "../data.json";
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    CalendarDays,
    MapPin,
} from "lucide-react";

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
        <section className="text-[#341600]" id="programs">
            <p className="uppercase font-medium ">church timeline</p>
            <h2 className="text-[4rem] leading-none font-semibold">
                Programs & events
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-9">
                <div className="col-span-2">
                    <DisplayEvent events={events} />
                </div>

                <div className="calendar-wrapper bg-[#341600] rounded-4xl px-6 py-4 pt-9 self-center">
                    <div className="flex place-content-between place-items-center text-neutral-50">
                        <p className="text-2xl font-semibold uppercase">
                            {month.name} <span className="">{data.year}</span>
                        </p>

                        <div className="buttons flex gap-4">
                            <button
                                disabled={monthIndex === 0 ? true : false}
                                className="p-2 bg-[#b2a7a0]"
                            >
                                <ArrowLeft
                                    size={20}
                                    onClick={prevMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                            <button className="p-2 bg-[#b2a7a0]">
                                <ArrowRight
                                    size={20}
                                    onClick={nextMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="days grid grid-cols-7 gap-1 mt-6 mb-4 text-[#b2a7a0]">
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
                                styles={`${ele - index === today && "text-neutral-50"}`}
                                hasEvent={hasEvent(ele - index)}
                                onClick={() => handleClick(ele - index)}
                            >
                                {ele - index}
                            </Box>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Box({ onClick, children, isDay, styles, hasEvent }) {
    const clickable = isDay;
    const classes = `
      box rounded-lg h-[3rem] w-[3rem] text-center
      grid place-content-center place-items-center gap-1
      text-neutral-50 ${styles}
      ${clickable ? "cursor-pointer hover:bg-[#341630] hover:text-neutral-50" : ""}
    `;
    return (
        <div onClick={clickable ? onClick : undefined} className={classes}>
            {isDay && children}

            {hasEvent ? (
                <div className="circle rounded-full p-1 w-fit bg-neutral-50 mix-blend-difference"></div>
            ) : null}
        </div>
    );
}

function DisplayEvent({ events }) {
    return (
        <div className="h-fit flex flex-col gap-4">
            {events.length > 0 ? (
                events.map((event) => {
                  const date = new Date(event.date);
                  const month = date.toLocaleString('default', {month: 'short'});
                  const day = date.getDate();

                  return (
                    <div
                        key={event.id}
                        className="flex gap-4 text p-6 px-7 bg-neutral-300 text-[#341600] rounded-4xl"
                    >
                        <div className="bg-neutral-100 px-4 py-2 rounded-2xl self-start text-center">
                          <p className="font-medium text-3xl">{day}</p>
                          <p className="text-sm uppercase">{month}</p>
                        </div>
                        <div>
                        <p className="uppercase text-neutral-700 text-xs p-1 px-4 rounded-full w-fit bg-neutral-200">
                            {event.category}
                        </p>
                        <h2 className="text-[1.5rem] leading-none capitalize font-semibold mb-4 mt-2">
                            {event.title}
                        </h2>

                        <ul className="flex gap-4 [&>li]:flex [&>li]:gap-1 [&>li]:items-center [&>li]:text-sm">
                            <li>
                                <MapPin size={19} />
                                {event.venue}
                            </li>
                            <li>
                                <CalendarDays size={19} />
                                {event.date}
                            </li>
                            <li>
                                <Clock size={19} />
                                {event.time} Hrs
                            </li>
                        </ul>
                        </div>
                    </div>
                )})
            ) : (
                <div className="grid text p-6 ">
                    <h2>no event</h2>
                </div>
            )}
        </div>
    );
}
