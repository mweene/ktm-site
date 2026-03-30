import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PlayLogo from "../assets/icons/play.svg";
import VideoPlayer from "./VideoPlayer";
import vid from "../assets/demo-bg.mp4";

const data = {
  video: {
    id: 'h-332e',
    src: `${vid}`,
    height: "",
    width: ""
  },
  cards: [
    {
      id: '9-212f',
      preacher: "dc j chanza",
      title: "In the wilderness",
      date: "2026-03-28",
      program: "bible study",
      styles: "bg-orange-500"
    },
    {
      id: '1-052r',
      preacher: "eld c chongo",
      title: "The 10 virgins",
      date: "2026-03-28",
      program: "main service",
      styles: "bg-orange-300"
    },
  ]
}

export default function RecentSermons() {
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = (event) => {
      const vidId = event.target.parentNode.value ?? '';
      
      navigate(`/sermons/id?=${vid}`);
      console.log(event.target.parentNode.value);
    }

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
                    more sermons <ArrowRight size={19}/>
                </a>
            </div>
            <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-2 min-h-92">
                <VideoPlayer id={data.video.id} src={data.video.src} />  
              </div>
              
              {data.cards.map(card => (
                <Card 
                  key={card.id}
                  preacher={card.preacher}
                  title={card.title}
                  date={card.date}
                  program={card.program}
                  value={`${card.id}`}
                  styles={card.styles}
                  onClick={(event) => handleCardClick(event)}
                />
              ))}
            </div>
        </section>
    );
}

function Card({ styles, onClick, preacher, title, date, program, value }) {
    return (
        <div className={`card rounded-4xl min-h-92 ${styles}`}>
          <div className="card-content p-6 grid place-content-between h-full">
            <p className="bg-neutral-200/60 py-1 px-4 rounded-full text-sm w-fit">
              {preacher}
            </p>
            <div>
              <h3 className="text-5xl font-semibold text-[#371700] leading-none">{title}</h3>

              <div className={`
                flex gap-4 [&>p]:text-[.79rem] mt-2 uppercase
                font-medium [&>p]:text-neutral-700
              `}>
                <p>{date}</p>
                <p>{program}</p> 
              </div>
                    
              <button
                onClick={onClick}
                className={`
                  flex items-center gap-2 mt-10 capitalize w-fit rounded-full
                  text-neutral-50 bg-[#612800] pl-4 pr-2 py-1
                `}
                value={value}
              >

                <span className="text-[1rem]">watch sermon</span>
                <img src={PlayLogo} alt="play logo" className="h-[2.2rem] bg-neutral-50 p-1.5 rounded-full"/>
              </button>
            </div>
          </div>
        </div>
    );
}
