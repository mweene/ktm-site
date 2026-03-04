export default function Events() {
    return (
        <div className="my-10">
            <div className="text-header">
                <h2 className="uppercase text-[1.01rem] font-bold text-neutral-500">our past events</h2>
                <p className="text-5xl w-4/6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <EventGallery />
        </div>
    )
}

function EventGallery() {
    return (
        <div className="grid gap-3 mt-8">
            <div className="grid grid-cols-7 gap-3">
                <EventCard className="col-span-1"/>
                <EventCard className="col-span-3"/>
                <EventCard className="col-span-2"/>
                <EventCard className="col-span-1"/>
            </div>
            <div className="grid grid-cols-6 gap-3">
                <EventCard className="col-span-2"/>
                <EventCard className="col-span-1"/>
                <EventCard className="col-span-3"/>
            </div>
        </div>
    )
}

function EventCard({bgImage="ktm1.jpg", className}) {
    return (
        <div 
            className={`bento-card p-10 rounded-4xl h-full bg-[url(/src/assets/${bgImage})]
            hover:bg-blue-400 relative ${className}`}
        >
         <div className="">
            <h4>Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
         </div>
        </div>
    )
}