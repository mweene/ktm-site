import { useState } from "react";
import data from "../data.json";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ClockIcon,
    CalendarDotsIcon,
    MapPinIcon,
} from "@phosphor-icons/react";

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
        <section className="text-[#101c2b]" id="programs">
            <p className="uppercase font-medium ">church timeline</p>
            <h2 className="text-[4.5rem] leading-none font-semibold">
                Programs & events
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-9">
                <div className="col-span-2">
                    <DisplayEvents events={events} />
                </div>

                <div className="calendar-wrapper bg-[#101c2b] rounded-4xl px-6 py-4 pt-9 self-center">
                    <div className="flex place-content-between place-items-center text-[#f7fbff]">
                        <p className="text-2xl font-semibold uppercase">
                            {month.name} <span className="">{data.year}</span>
                        </p>

                        <div className="buttons flex gap-4">
                            <button
                                disabled={monthIndex === 0 ? true : false}
                                className="p-2 bg-[#7b838e] hover:bg-[#c1c7ce] text-[#f7fbff] hover:text-[#101c2b]"
                            >
                                <ArrowLeftIcon
                                    size={20}
                                    onClick={prevMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                            <button className="p-2 bg-[#7b838e] hover:bg-[#c1c7ce] text-[#f7fbff] hover:text-[#101c2b]">
                                <ArrowRightIcon
                                    size={20}
                                    onClick={nextMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                        </div>
                    </div>

                    <ul className="days grid grid-cols-7 gap-1 mt-9 mb-4 text-[#7b838e]">
                        {dayHeaders.map((day) => (
                            <li key={day} className="uppercase text-sm">
                                {day}
                            </li>
                        ))}
                    </ul>
                    <div className="box-grid grid grid-cols-7 gap-1">
                        {calendar.grid.map((ele) => (
                            <Box
                                key={ele}
                                isDay={isDay(ele)}
                                styles={`${ele - index === today && "!text-[#101c2b] bg-[#f7fbff] font-medium"}`}
                                hasEvent={hasEvent(ele - index)}
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
      box rounded-full h-[2.5rem] w-[2.5rem] text-center
      grid place-content-center place-items-center gap-1
      text-[#f7fbff] ${styles}
      ${clickable ? "cursor-pointer hover:bg-[#7b838e] hover:text-[#101c2b]" : ""}
    `;
    return (
        <div onClick={clickable ? onClick : undefined} className={classes}>
            {isDay && children}

            {hasEvent ? (
                <div className="circle rounded-full p-0.5 w-fit bg-neutral-50 mix-blend-screen"></div>
            ) : null}
        </div>
    );
}

function DisplayEvents({ events }) {
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
                        className="flex text bg-[#e6ebef] rounded-4xl"
                    >
                        <div className="rounded-2xl self-start text-center bg-[#b8bfc6] m-6 p-4 px-6">
                          <p className="font-semibold text-4xl leading-none">{day}</p>
                          <p className=" font-medium uppercase">{month}</p>
                        </div>

                        <div className="self-center">
                        <p className="uppercase text-xs px-4 rounded-full w-fit">
                            {event.category}
                        </p>
                        <h2 className="text-[2.25rem] leading-none capitalize font-semibold">
                            {event.title}
                        </h2>

                        <ul className="flex gap-4 [&>li]:flex [&>li]:gap-1 [&>li]:text-[#101c2b]/80  [&>li]:items-center [&>li]:text-sm mt-3">
                            <li>
                                <MapPinIcon size={19} />
                                {event.venue}
                            </li>
                            <li>
                                <CalendarDotsIcon size={19} />
                                {event.date}
                            </li>
                            <li>
                                <ClockIcon size={19} />
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
