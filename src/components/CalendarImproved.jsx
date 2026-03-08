import { useMemo, useState } from "react";

const calendarEvents = [
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
        date: "2026-02-20",
        venue: "villa sda church",
    },
];

const dayHeaders = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const pad = (num) => String(num).padStart(2, "0");

const toISODate = (year, monthIndex, day) =>
    `${year}-${pad(monthIndex + 1)}-${pad(day)}`;

const buildCalendarCells = (year, monthIndex) => {
    const firstDayIndex = new Date(year, monthIndex, 1).getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    return Array.from({ length: 42 }, (_, i) => {
        const day = i - firstDayIndex + 1;
        const inMonth = day >= 1 && day <= daysInMonth;

        return {
            key: `cell-${i}`,
            day: inMonth ? day : null,
            isoDate: inMonth ? toISODate(year, monthIndex, day) : null,
            inMonth,
        };
    });
};

export default function CalendarImproved() {
    const year = 2026;
    const monthIndex = 1; // February
    const monthName = new Date(year, monthIndex, 1).toLocaleString("en-US", {
        month: "long",
    });

    const [selectedDate, setSelectedDate] = useState(null);

    const eventsByDate = useMemo(() => {
        return calendarEvents.reduce((acc, event) => {
            acc[event.date] = acc[event.date] ? [...acc[event.date], event] : [event];
            return acc;
        }, {});
    }, []);

    const cells = useMemo(() => buildCalendarCells(year, monthIndex), [year, monthIndex]);
    const selectedEvents = selectedDate ? eventsByDate[selectedDate] || [] : [];

    return (
        <section className="w-fit space-y-3">
            <h2 className="text-lg font-semibold">
                {monthName} {year}
            </h2>

            <div className="grid grid-cols-7 gap-0.5" role="row">
                {dayHeaders.map((day) => (
                    <p key={day} className="text-sm font-medium">
                        {day}
                    </p>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-0.5">
                {cells.map((cell) => {
                    const eventCount = cell.isoDate ? (eventsByDate[cell.isoDate] || []).length : 0;
                    const isSelected = cell.isoDate && selectedDate === cell.isoDate;

                    return (
                        <button
                            key={cell.key}
                            type="button"
                            disabled={!cell.inMonth}
                            onClick={() => setSelectedDate(cell.isoDate)}
                            className={[
                                "min-h-20 rounded-lg border p-3 text-left",
                                cell.inMonth
                                    ? "cursor-pointer border-neutral-400 bg-neutral-100"
                                    : "cursor-default border-neutral-200 bg-neutral-50",
                                isSelected ? "ring-2 ring-neutral-700" : "",
                            ].join(" ")}
                            aria-label={
                                cell.isoDate
                                    ? `${cell.isoDate}${eventCount ? `, ${eventCount} event(s)` : ""}`
                                    : "empty date cell"
                            }
                        >
                            {cell.day ? (
                                <div className="flex items-start justify-between">
                                    <span>{cell.day}</span>
                                    {eventCount > 0 ? (
                                        <span className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-white">
                                            {eventCount}
                                        </span>
                                    ) : null}
                                </div>
                            ) : null}
                        </button>
                    );
                })}
            </div>

            <div aria-live="polite">
                {selectedDate ? (
                    selectedEvents.length ? (
                        <ul className="space-y-1 text-sm">
                            {selectedEvents.map((event) => (
                                <li key={event.id}>
                                    <span className="font-medium">{event.name}</span> - {event.venue}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm">No events on {selectedDate}.</p>
                    )
                ) : (
                    <p className="text-sm">Select a date to view events.</p>
                )}
            </div>
        </section>
    );
}
