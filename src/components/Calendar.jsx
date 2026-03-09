import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const month = {
    name: "march",
    year: "2026",
    days: 31,
    firstDay: "fri",
    events: [
        {
            id: "ktm001",
            name: "pathfinder camporee",
            date: "2026-02-05",
            venue: "munda wanga gardens",
            charge: "K120",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt at neque enim fugit quas explicabo saepe dolore magni natus eaque"
        },
        {
            id: "ktm002",
            name: "adventure tea party",
            date: "2026-02-10",
            venue: "local church",
            charge: "K50",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt at neque enim fugit quas explicabo saepe dolore magni natus eaque"
        },
        {
            id: "ktm003",
            name: "dorcas rally",
            date: "2026-02-12",
            venue: "local church",
            charge: "free",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt at neque enim fugit quas explicabo saepe dolore magni natus eaque"
        },
        {
            id: "ktm004",
            name: "youth fellowship",
            date: "2026-02-23",
            venue: "villa sda church",
            charge: "K75",
            note: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt at neque enim fugit quas explicabo saepe dolore magni natus eaque"
        },
    ],
};

const dayHeaders = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
];

const extractDayFromDate = (dateStr) => Number(dateStr.split("-")[2]);

export default function Calendar() {
    const [program, setProgram] = useState(month.events[0]);
    const calendar = {
        grid: [],
    };
    for (let i = 1; i <= 42; i++) {
        calendar.grid.push(i);
    }

    const handleClick = (num) => {
      const result = month.events.find(event => extractDayFromDate(event.date) === num);
      result ? setProgram(result) : setProgram({name: 'no event'})
    }


    const index = dayHeaders.findIndex((day) => day === month.firstDay);

    const isFilled = (num) =>
        num <= index || num > month.days + index ? false : true; //date placement mechanism

    return (
        <section className="p-8 rounded-4xl bg-neutral-950 text-neutral-100">
            <h2 className="uppercase text-[1.01rem] font-bold text-neutral-500">church timeline</h2>
            <p className="text-5xl w-4/6">Go through our programs for 2026. Set a reminder so you don't miss out.</p>

            <div className="grid md:grid-cols-3 gap-8 mt-9 p-8">
                <div className="calendar-wrapper md:col-span-2">
                    <div className="flex place-content-between place-items-center">
                        <p className="text-3xl font-medium capitalize text-nuetral-700">
                            {month.name} {" "} 
                            <span className="">{month.year}</span>
                        </p>

                        <div className="buttons flex gap-2">
                            <ArrowLeft size={20}/>
                            <ArrowRight size={20}/>
                        </div> 
                    </div> 

                    <div className="days grid grid-cols-7 gap-0.5">
                        {dayHeaders.map((day) => (
                            <p key={day} className="capitalize">{day}</p>
                        ))}
                    </div>
                    <div className="box-grid grid grid-cols-7 gap-1">
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
                </div>

                <DisplayEvent program={program}/>
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

function DisplayEvent({program}) {
    return (
        <div className="border rounded-3xl bg-neutral-200 text-neutral-900">
            <div className="event-image bg-sky-500 p-10 py-30 rounded-3xl"></div>
            
            <div className="text p-6">
                <div className="flex text-sm gap-4">
                    <p className="bg-neutral-400">{program.date}</p>
                    <p className="bg-neutral-400">{program.venue}</p>
                </div>
                <p className="bg-neutral-400 w-fit mt-2">{program.charge}</p>

                <p className="text-3xl font-semibold capitalize w-1/2">{program.name}</p>
                <p>{program.note}</p>
            </div>

            <div className="buttons flex gap-2 p-6">
                <ArrowLeft size={20}/>
                <ArrowRight size={20}/>
            </div>
        </div>
    )
}
