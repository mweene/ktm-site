import { useState } from "react";
import { ArrowRight } from "lucide-react";
import PlayLogo from "../assets/icons/play.svg";
import VideoPlayer from "./VideoPlayer";
import vid from "../assets/demo-bg.mp4";

export default function RecentSermons() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="md:mt-30">
            <div className="mb-8 flex place-content-between">
                <div>
                    <p className="uppercase">recent sermons</p>
                    <h2 className="text-5xl font-semibold">
                        Catch up with the word <br />
                        Anytime, anywhere
                    </h2>
                </div>
                
                <a href="/sermons" className="self-end flex capitalize items-center gap-2">
                    more sermons 
                    <ArrowRight size={20} />
                </a>
            </div>
            <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="lg:col-span-2 min-h-92">
                    <VideoPlayer src={vid} />  
                </div>

                <Card className="bg-neutral-300">
                  <div className="card-content p-6 grid place-content-between h-full">
                      <p className="border border-neutral-400 bg-neutral-200 py-1 px-4 rounded-full text-sm w-fit">
                          eld m. milanzi
                      </p>
                      <div>
                        <h3 className="text-4xl leading-none">By his words we are saved</h3>

                        <div className={`
                          flex gap-4 [&>p]:text-[.79rem] mt-2 uppercase
                          font-medium [&>p]:text-neutral-700
                        `}>
                          <p>21 march 2026</p>
                          <p>week of prayer</p> 
                        </div>
                    
                        <button className={`
                          flex items-center gap-2 mt-10 capitalize w-fit rounded-full
                          border border-neutral-900 pl-4 pr-2 py-1
                        `}>
                          <span>watch sermon</span>
                          <img src={PlayLogo} alt="play logo" className="h-[2.5rem] bg-neutral-50 p-2 rounded-full"/>
                        </button>
                      </div>
                  </div>
                </Card>
                
                <Card className="bg-neutral-300">
                  <div className="card-content p-6 grid place-content-between h-full">
                      <p className="border border-neutral-400 bg-neutral-200 py-1 px-4 rounded-full text-sm w-fit">
                          eld m. milanzi
                      </p>
                      <div>
                        <h3 className="text-4xl leading-none">By his words we are saved</h3>

                        <div className={`
                          flex gap-4 [&>p]:text-[.79rem] mt-2 uppercase
                          font-medium [&>p]:text-neutral-700
                        `}>
                          <p>21 march 2026</p>
                          <p>week of prayer</p> 
                        </div>
                    
                        <button className={`
                          flex items-center gap-2 mt-10 capitalize w-fit rounded-full
                          border border-neutral-900 pl-4 pr-2 py-1
                        `}>
                          <span>watch sermon</span>
                          <img src={PlayLogo} alt="play logo" className="h-[2.5rem] bg-neutral-50 p-2 rounded-full"/>
                        </button>
                      </div>
                  </div>
                </Card>
            </div>
        </section>
    );
}

function Card({ className, children }) {
    return (
        <div
            className={`
              card rounded-4xl min-h-92 [&>p]:text-lg ${className}
            `}
        >
            {children}
        </div>
    );
}
