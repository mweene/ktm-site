import { useState } from "react";
import data from "../data.json";
import { ArrowLeft, ArrowRight, Clock, CalendarDays, MapPin } from "lucide-react";

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
            <h2 className="text-[4rem] leading-none font-semibold">Programs & events</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-9">
                <DisplayEvent events={events} />
                
                <div className="calendar-wrapper">
                    <div className="flex place-content-between place-items-center">
                        <p className="text-2xl font-semibold uppercase">
                            {month.name} <span className="">{data.year}</span>
                        </p>

                        <div className="buttons flex gap-4">
                            <button 
                                disabled={monthIndex === 0 ? true : false}
                                className="p-2 border-2"
                            >
                                <ArrowLeft
                                    size={20}
                                    onClick={prevMonth}
                                    className="cursor-pointer"
                                />
                            </button>
                            <button className="p-2 border-2">
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
                                styles={`${ele - index === today && "bg-[#341600] text-neutral-50"}`}
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
      box rounded-lg h-[5rem] text-center
      grid place-content-center place-items-center gap-1
      text-[#341600] ${styles}
      ${clickable ? "cursor-pointer border-2 border-[#341600] hover:bg-[#341600] hover:text-neutral-50" : ""}
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
        <div className="p-6 rounded-4xl bg-[#ffc381] h-fit flex flex-col gap-4">
            {events.length > 0 ? (
                events.map((event) => (
                    <div key={event.id} className="grid text p-6 px-10 bg-[#ffead3] rounded-4xl">
                      <p className="uppercase text-sm border border-neutral-50 p-1 px-4 rounded-full w-fit bg-[#ffc381]">
                        {event.category}
                      </p>
                      <h2 className="text-[2.5rem] leading-none capitalize font-semibold mb-4 mt-2">{event.title}</h2>

                      <ul className="flex gap-4 [&>li]:flex [&>li]:gap-1 [&>li]:items-center">
                        <li><MapPin size={19}/>{event.venue}</li>
                        <li><CalendarDays size={19}/>{event.date}</li>
                        <li><Clock size={19}/>{event.time} Hrs</li>
                      </ul>
                    </div>
                ))
            ) : (
                <div className="grid text p-6 ">
                    <h2>no event</h2>
                </div>
            )}
        </div>
    );
}
