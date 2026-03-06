import {ArrowLeft, ArrowRight} from "lucide-react";

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
            <div className="flex">
              <ArrowLeft size={25}/>
              <ArrowRight size={25} />
            </div>
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
            className={`bento-card rounded-4xl h-[15rem] bg-[url(/src/assets/${bgImage})]
            hover:bg-blue-400 relative ${className}`}
        >
        </div>
    )
}
