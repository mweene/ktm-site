import { Link } from "react-router-dom";
import { PlayIcon } from "@phosphor-icons/react";
import bgVid from "../assets/demo-bg.mp4";

export default function Hero() {
    return (
        <section className="Hero min-h-[100dvh] grid md:px-10 pb-5 relative">
            <video loop autoPlay src={bgVid} className="h-full w-full object-cover absolute top-0 z-1"/>
            <div className="video-bg-wrapper absolute bg-neutral-950/70  h-full w-full z-2"></div> 

            <div className="flex place-content-between pb-5 static z-3">
                <div className="main-text place-self-end md:w-4/7">
                    <h1 className="text-[3.5rem] md:text-[5rem] leading-none font-extrabold text-white">
                        His word <br />
                        Your Growth <br />
                        Our Journey
                    </h1>

                    <p className="my-5 text-[#c9d2de] text-lg font-light md:w-4/5">
                        Join a community rooted in faith, growing together
                        through the teachings of Jesus Christ for every age,
                        every season of life
                    </p>
                    
                    <div className={`
                        [&_button]:transition-all [&_button]:w-full
                        md:[&_button]:w-fit
                        [&_button]:duration-500 [&_button]:ease-in-out
                    `}>
                        <button className={`
                            bg-[#fff] text-[#070d14] pl-5 pr-1 py-1.5
                            font-semibold flex items-center hover:bg-[#e5e6e8]
                            hover:scale-105
                          `}
                        >
                            <Link to="/sermons" className="flex items-center gap-3">
                                Watch sermons 
                                <span className="rounded-full bg-[#070d14] p-2.5">
                                    <PlayIcon weight="fill" color="#fff"/>
                                </span>
                            </Link>
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
