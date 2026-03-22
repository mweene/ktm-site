import {ArrowLeft, ArrowRight} from "lucide-react";

export default function Events() {
    return (
        <div className="">
            <div className="text-header">
                <p className="uppercase">our gallery</p>
                <h2 className="text-5xl font-semibold">
                    Life together in Christ.
                </h2>
            </div>
            <div className="mt-6">
              <ul className="flex gap-4 [&>li]:cursor-pointer">
                <li className="underline font-medium">activity one</li>
                <li>activity two</li>
                <li>activity three</li>
                <li>activity four</li>
                <li>activity five</li>
              </ul>
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
            className={`bento-card rounded-4xl h-[15rem] bg-[url(/src/assets/${bgImage})]
            hover:bg-blue-400 relative ${className}`}
        >
        </div>
    )
}
