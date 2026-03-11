'use strict';

class Month {
  constructor( name, year, days, firstDay, events, ) {
    this.name = name;
    this.year = year;
    this.days = days;
    this.firstDay = firstDay;
    this.events = events;
  }
}

class Event {
  constructor( name, date, venue, charge, notes ) {
    this.name = name;
    this.date = date;
    this.venue = venue;
    this.charge = charge;
    this.notes = notes;
  }
}

const months = ['january', 'February', 'March', 'April'];
const events = ['outdoor retreat', 'bible conference', 'campfire', 'music fellowship', 'community outreach', 'dorcas rally', 'amo rally', 'week of prayer'];
const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const venues = ['local church', '21 miles', 'kafue national park', 'mwembeshi police', 'mandevu main sda'];
const charges = ['free', '120', '650', '50'];

const randNumber = (range) => Math.floor(Math.random() * range);

function generateRandomMonth() {
  const monthName = months[randNumber(months.length)]; 
  const year = new Date().getFullYear();
  const days = '31';
  const firstDay = weekDays[randNumber(weekDays.length)];

  const eventName = events[randNumber(events.length)];
  const eventDate = new Date(randNumber(10)).toLocaleDateString();
  const eventVenue = venues[randNumber(venues.length)];
  const eventCharge = charges[randNumber(charges.length)];
  const eventNotes = '';

  const event = new Event(eventName, eventDate, eventVenue, eventCharge, eventNotes);
  const month = new Month(monthName, year, days, firstDay, events);
  
  month.events = event;

  return month;
}

const result = [];

for(let i = 0;  i < 3; i++) {
  const m = generateRandomMonth();
  result.push(m);
} 

export result;

