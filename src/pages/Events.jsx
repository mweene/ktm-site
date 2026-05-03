import { useState } from "react"

function Jumbotron() {
  return (
    <div className="h-[50dvh] px-5 md:px-20 py-15 text-white bg-[#101c2b] grid">
      <h1 className="capitalize text-[4.5rem] font-semibold leading-none self-end">events</h1>
    </div>
  )
}

const randList = (n) => {
  const arr = []
  for(let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random(n) * i))
  }
  return arr
}

function EventModal({data}) {
  return (
    <div className="p-40 bg-green-300">
    {data}
    </div>
  )
}

export default function Events() {
  const [openEvent, setOpenEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] - useState(false)

  const events = [
    {id: 0, title: 'january', number: 4},
    {id: 2, title: 'february', number: 7},
    {id: 4, title: 'march', number: 15},
    {id: 13, title: 'april', number: 11},
    {id: 9, title: 'may', number: 3},
    {id: 23, title: 'june', number: 6},
    {id: 34, title: 'july', number: 13},
    {id: 31, title: 'august', number: 10},
    {id: 43, title: 'september', number: 4},
    {id: 11, title: 'october', number: 9},
    {id: 10, title: 'november', number: 16},
    {id: 99, title: 'december', number: 10}
  ]

  const handleClick = (e) => {
    setOpenEvent(e.id)
  }

  const handleCardClick = (e) => console.log(e)
	return (
		<section className="text-[#101c2b]">
      <Jumbotron />
      
      <h2 className="font-medium text-2xl"></h2>
      <ul className={`
        m-5 md:mx-20 md:mt-20 border border-[#101c2b]/40 rounded-2xl 
      `}>
        {events.map(event => (
          <li 
            key={event.id}
            onClick={() => handleClick(event)}
            className={`
              last:border-none last:rounded-b-2xl first:rounded-t-2xl 
              border-b border-[#101c2b]/40 p-5 px-7 hover:bg-[#101c2b]/10 
              cursor-pointer ${event.id === openEvent && 'bg-[#101c2b]/10'}
          `}>
            <div className="flex place-content-between items-center w-full">
              <span className="text-2xl md:text-4xl capitalize">{event.title}</span>
              <span>events ({event.number})</span>
            </div>

            {/**/}
            <div className="flex gap-4 overflow-hidden">
              {event.id === openEvent && (
                randList(event.number).map((ele, index) => {
                  console.log(randList(event.number))
                  return (
                  <>
                    <div 
                      key={`${event.id}-${ele}`} 
                      onClick={() => handleCardClick(index)} 
                      className="h-30 bg-white/90 p-4 px-15 mt-6 rounded-3xl"
                    >
                    </div>
                  </>
                )})
              )}
            </div>

            {isModalOpen && <EventModal data="i am open"/>}
          </li>
        ))}
      </ul>
    </section>
	)
}

