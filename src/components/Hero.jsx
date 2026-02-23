import { useState } from "react";

export default function Hero() {
    const [location, setLocation] = useState(false);
    return (
        <section className="Hero bg-fuchsia-100 p-4 h-120 grid">
            <div className=" flex place-content-between">
                <div className="main-text place-self-end">
                    <h1 className="text-3xl font-bold">
                        Lorem ipsum dolor sit amet.
                    </h1>
                    <p className="w-2/4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Hic, quidem! Velit praesentium officiis nihil ab
                        totam pariatur eligendi voluptas!
                    </p>
                    <button>watch sermon</button>
                </div>
                <div
                    className="location self-end cursor-pointer border px-5 py-8"
                    onClick={() => setLocation(true)}
                >
                    church location
                </div>
                {location && <ChurchMap onClose={() => setLocation(false)} />}
            </div>
        </section>
    );
}

function ChurchMap({ onClose }) {
    return (
        <div className="border">
            <div className="bg-pink-100">
                <button onClick={onClose}>close</button>
                <div className="">
                    <p>google maps</p>
                </div>
            </div>
        </div>
    );
}
