import { Link } from "react-router-dom";
import { Navigation, LucidePlay } from "lucide-react";
import bgVid from "../assets/demo-bg.mp4";

export default function Hero() {
    return (
        <section className="Hero min-h-[100dvh] grid md:px-10 pb-5 relative">
            <video loop autoPlay src={bgVid} className="h-full w-full object-cover absolute top-0 z-1"/>
            <div className="video-bg-wrapper absolute bg-neutral-950/70  h-full w-full z-2"></div>  
            <div className="flex place-content-between pb-10 static z-3">
                <div className="main-text place-self-end md:w-4/7">
                    <h1 className="text-4xl md:text-7xl font-semibold text-white">
                        His word <br />
                        <span className="text-orange-500">Your Growth</span> <br />
                        Our Journey
                    </h1>

                    <p className="my-5 text-gray-200 text-lg font-light w-4/5">
                        Join a community rooted in faith, growing together
                        through the teachings of Jesus Christ for every age,
                        every season of life
                    </p>
                    
                    <div className="flex gap-6 [&>button>a]:px-6 [&>button>a]:py-3 [&>button]:capitalize">
                        <button className={`
                            text-neutral-50 bg-orange-500 hover:text-neutral-50 
                            font-medium flex items-center gap-2
                          `}
                        >
                            <Link to="/sermons" className="flex items-center gap-4">
                                watch latest sermon 
                                <span className="p-1 rounded-full bg-neutral-50 text-neutral-950">
                                    <LucidePlay size={17}/>
                                </span>
                            </Link>
                        </button>
                        <button className="border border-neutral-200 text-neutral-50">
                            <a href="#programs" className="">find your program</a>
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
