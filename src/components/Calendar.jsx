import data from "../data.json";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

//const month = data.months.jan;
//console.log(Object.keys(data.months));

const dayHeaders = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const extractDayFromDate = (dateStr) => Number(dateStr.split("-")[2]);

export default function Calendar() {
    const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
    //const monthName = Object.keys(data.months)[monthIndex];
    const [month, setMonth] = useState(data.months[monthIndex]);

    const prevMonth = () => {
        setMonthIndex((prev) => prev - 1);
        setMonth(data.months[monthIndex]);
    };

    const nextMonth = () => {
        setMonthIndex((prev) => prev + 1);
        setMonth(data.months[monthIndex]);
    };

    console.log(data);

    const calendar = {
        grid: [],
    };
    for (let i = 1; i <= 42; i++) {
        calendar.grid.push(i);
    }

    //const handleClick = (num) => {
    //    const result = month.events.find(
    //        (event) => extractDayFromDate(event.date) === num);
    //    result ? setProgram(result) : setProgram({ title: "no event" });
    //};

    const index = month.firstDay;

    const isFilled = (num) =>
        num <= index || num > month.days + index ? false : true; //date placement mechanism

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
                            <ArrowLeft
                                size={20}
                                onClick={prevMonth}
                                className="cursor-pointer"
                            />
                            <ArrowRight
                                size={20}
                                onClick={nextMonth}
                                className="cursor-pointer"
                            />
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
                            <Box key={ele} isFilled={isFilled(ele)}>
                                {ele - index}
                            </Box>
                        ))}
                    </div>
                </div>

                <DisplayEvent event={month.events} />
            </div>
        </section>
    );
}

function Box({ onClick, children, isFilled }) {
    return (
        <div
            onClick={onClick}
            className={`
              box p-6 border border-neutral-800 rounded-lg
              cursor-pointer text-center text-neutral-100 hover:bg-neutral-200
              hover:text-neutral-900
              ${isFilled ? "bg-neutral-700" : null}
            `}
        >
            {isFilled ? children : " "}
        </div>
    );
}

function DisplayEvent({ event }) {
    return (
        <div className="rounded-3xl bg-neutral-200 text-neutral-900 relative">
            <div className="event-image bg-sky-600 bg-[url(/src/assets/ktm1.jpg) p-10 py-35 rounded-3xl"></div>

            <div className="grid text p-6 ">
                <div className="flex flex-wrap text-sm gap-4 asolute top-0">
                    <p className="bg-neutral-400 rounded-full">{event.date}</p>
                    <p className="bg-neutral-400 rounded-full">{event.venue}</p>
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

            {event.name === "mweene" && (
                <div className="buttons flex gap-2 p-6">
                    <ArrowLeft size={20} />
                    <ArrowRight size={20} />
                </div>
            )}
        </div>
    );
}
