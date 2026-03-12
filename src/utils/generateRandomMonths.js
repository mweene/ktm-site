"use strict";

class Month {
    constructor(name, year, days, firstDay, events = []) {
        this.name = name;
        this.year = year;
        this.days = days;
        this.firstDay = firstDay;
        this.events = events;
    }
}

class Event {
    constructor(name, date, venue, charge, notes) {
        this.name = name;
        this.date = date;
        this.venue = venue;
        this.charge = charge;
        this.notes = notes;
    }
}

const months = ["january", "February", "March", "April"];
const churhEvents = [
    "outdoor retreat",
    "bible conference",
    "campfire",
    "music fellowship",
    "community outreach",
    "dorcas rally",
    "amo rally",
    "week of prayer",
];
const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const venues = [
    "local church",
    "21 miles",
    "kafue national park",
    "mwembeshi police",
    "mandevu main sda",
];
const charges = ["free", "120", "650", "50"];
const monthDays = [28 , 30, 31];

const randNumber = (range) => Math.floor(Math.random() * range);

function generateRandomMonth() {
    const monthName = months[randNumber(months.length - 1)];
    const year = new Date().getFullYear();
    const days = monthDays[randNumber(monthDays.length - 1)];
    const firstDay = weekDays[randNumber(weekDays.length - 1)];

    const eventName = churhEvents[randNumber(churhEvents.length - 1)];
    const eventDate = new Date(randNumber(randNumber(10))).toLocaleDateString();
    const eventVenue = venues[randNumber(venues.length - 1)];
    const eventCharge = charges[randNumber(charges.length - 1)];
    const eventNotes = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt at neque enim
        fugit quas explicabo saepe dolore magni natus eaque`;

    const month = new Month(monthName, year, days, firstDay);

    for (let i = 0; i < 3; i++) {
        month.events.push(
            new Event(
                eventName,
                eventDate,
                eventVenue,
                eventCharge,
                eventNotes,
            ),
        );
    }

    return month;
}

const result = [];

for (let i = 0; i < 3; i++) {
    const m = generateRandomMonth();
    result.push(m);
    i;
}

export default result;
