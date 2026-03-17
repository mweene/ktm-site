import { Navigation } from "lucide-react";

export default function Hero() {
    return (
        <section className="Hero min-h-[100dvh] grid md:px-10 pb-5">
            <div className="flex place-content-between pb-4">
                <div className="main-text place-self-end rounded-xl md:w-4/7">
                    <h1 className="text-4xl md:text-6xl font-semibold text-white">
                        His word <br />
                        Your Growth <br />
                        Our Journey
                    </h1>

                    <p className="my-4 text-gray-200 text-lg font-light w-4/5">
                        Join a community rooted in faith, growing together
                        through the teachings of Jesus Christ for every age,
                        every season of life
                    </p>
                    
                    <div className="md:flex gap-6">
                        <button className="text-black bg-white font-medium">
                            watch latest sermon
                        </button>
                        <button className="border border-neutral-500 text-neutral-50">
                            find your program
                        </button>
                    </div>
                </div>
                <div
                    className="location self-end cursor-pointer"
                    onClick={() => setLocation((prev) => !prev)}
                ></div>
            </div>
        </section>
    );
}

function ChurchMap({ onClose }) {
    return (
        <div className="border absolute bg-fuchsia-500/30 top-0 bottom-0 right-0 left-0 grid place-content-center place-items-center">
            <div className="relative m-40 bg-emerald-700 w-fit">
                <div className="">
                    <button onClick={onClose}>close</button>
                    <div className="">
                        <p>google maps</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
