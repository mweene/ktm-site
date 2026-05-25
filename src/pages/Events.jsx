import { useState } from "react";

function Jumbotron() {
    return (
        <div className="h-[50dvh] px-5 md:px-20 py-15 text-white bg-[#101c2b] grid">
            <h1 className="capitalize text-[4.5rem] font-semibold leading-none self-end">
                events
            </h1>
        </div>
    );
}

function EventModal({ data }) {
    return <div className="p-40 bg-green-300">{data}</div>;
}

export default function Events() {
    const [openEvent, setOpenEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const newEvents = [
        {
            id: 1,
            month: "january",
            events: [
                { id: "jan1", name: "campfire", group: "ambassadors" },
                { id: "jan2", name: "campfire", group: "ambassadors" },
                { id: "jan3", name: "campfire", group: "ambassadors" },
            ],
        },
        {
            id: 2,
            month: "february",
            events: [
                { id: "feb1", name: "campfire", group: "ambassadors" },
                { id: "feb2", name: "campfire", group: "ambassadors" },
                { id: "feb3", name: "campfire", group: "ambassadors" },
                { id: "feb4", name: "campfire", group: "ambassadors" },
            ],
        },
        {
            id: 3,
            month: "march",
            events: [{ id: "mar1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 4,
            month: "april",
            events: [{ id: "apr1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 5,
            month: "may",
            events: [{ id: "may1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 6,
            month: "june",
            events: [{ id: "jun1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 7,
            month: "july",
            events: [{ id: "jul1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 8,
            month: "august",
            events: [{ id: "aug1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 9,
            month: "september",
            events: [{ id: "sep1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 10,
            month: "october",
            events: [{ id: "oct1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 11,
            month: "november",
            events: [{ id: "nov1", name: "campfire", group: "ambassadors" }],
        },
        {
            id: 12,
            month: "december",
            events: [{ id: "dec1", name: "campfire", group: "ambassadors" }],
        },
    ];

    const handleClick = (e) => {
        setOpenEvent(e.id);
    };

    const handleCardClick = (e) => console.log(e);
    return (
        <section className="text-[#101c2b]">
            <Jumbotron />

            <h2 className="font-medium text-2xl"></h2>
            <ul
                className={`
        m-5 md:mx-20 md:mt-20 border border-[#101c2b]/40 rounded-2xl
      `}
            >
                {newEvents.map((event) => (
                    <li
                        key={event.id}
                        onClick={() => {
                            handleClick(event);
                            console.log(event.id);
                        }}
                        className={`
              last:border-none last:rounded-b-2xl first:rounded-t-2xl
              border-b border-[#101c2b]/40 p-5 px-7 hover:bg-[#101c2b]/10
              cursor-pointer ${event.id === openEvent && "bg-[#101c2b]/10"}
          `}
                    >
                        <div className="flex place-content-between items-center w-full">
                            <span className="text-2xl md:text-4xl capitalize">
                                {event.month}
                            </span>
                            <span>events ({event.events.length})</span>
                        </div>

                        {/**/}
                        <div className="flex gap-4 overflow-auto">
                            {event.id === openEvent &&
                                event.events.map((ele) => {
                                    return (
                                        <>
                                            <div
                                                onClick={() =>
                                                    handleCardClick(ele)
                                                }
                                                className="h-30 bg-white/90 p-4 px-15 mt-6 rounded-3xl hover:border mb-3"
                                            ></div>
                                        </>
                                    );
                                })}
                        </div>

                        {isModalOpen && <EventModal data="i am open" />}
                    </li>
                ))}
            </ul>
        </section>
    );
}
