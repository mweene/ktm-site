import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PlayLogo from "../assets/icons/play.svg";
import { VideoPlayer } from "./VideoPlayer";
import vid from "../assets/demo-bg.mp4";

const data = {
    video: {
        id: "h-332e",
        src: `${vid}`,
        height: "",
        width: "",
    },
    cards: [
        {
            id: "9-212f",
            preacher: "eld. j chanza",
            title: "In the wilderness",
            date: "2026-03-28",
            program: "bible study",
        },
      
        {
            id: "1-052r",
            preacher: "eld. c chongo",
            title: "The 10 virgins",
            date: "2026-03-28",
            program: "main service",
        },
    ],
};

export default function RecentSermons() {
    const navigate = useNavigate();

    const handleCardClick = (event) => {
        const vidId = event.target.parentNode.value ?? "";

        navigate(`/sermons/id?=${vidId}`);
        console.log(event.target.parentNode.value);
    };

    return (
        <section className="md:mt-30 text-[#101c2b]">
            <div className="mb-8 flex place-content-between">
                <div className="">
                    <p className="capitalize text-xl font-medium">recent sermons</p>
                    <h2 className="text-[4rem] leading-none font-semibold">
                        Catch up with the word <br />
                        Anytime, anywhere
                    </h2>
                </div>

                <a
                    href="/sermons"
                    className="self-end flex capitalize items-center gap-1"
                >
                    more sermons 
                    <span className="text-[#101c2b]"> 
                      <ArrowRight size={20} />
                    </span>
                </a>
            </div>
            <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="lg:col-span-2 min-h-[23rem] [&_video]:!h-full [&_video]:!w-full [&_video]:!object-cover">
                    <VideoPlayer id={data.video.id} src={data.video.src} />
                </div>

                {data.cards.map((card) => (
                    <Card
                        key={card.id}
                        preacher={card.preacher}
                        title={card.title}
                        date={card.date}
                        program={card.program}
                        value={`${card.id}`}
                        onClick={(event) => handleCardClick(event)}
                    />
                ))}
            </div>
        </section>
    );
}

function Card({ onClick, preacher, title, date, program, value }) {
    return (
        <div className={`
          card rounded-4xl min-h-92 bg-[#6a727d] hover:bg-[#555f6a]
          text-[#f7fbff] transition-all duration-300 ease-in-out
        `}>
            <div className="card-content p-6 grid place-content-between h-full">
                <p className="py-1 px-4 rounded-full text-[#e7eaf0] text-sm bg-[#6a727d] border-2 border-[#99a0a8] capitalize w-fit">
                    {preacher}
                </p>
                <div>
                    <h3 className="text-4xl font-semibold leading-none">
                        {title}
                    </h3>

                    <div
                        className={`
                flex gap-4 [&>p]:text-sm mt-2 capitalize
                font-medium text-[#cdd2d8]
              `}
                    >
                        <p>{date}</p>
                        <p>{program}</p>
                    </div>

                    <button
                        onClick={onClick}
                        className={`
                          flex items-center gap-2 mt-10 capitalize w-fit rounded-full
                          bg-[#101c2b] text-[#f7fbff] pl-4 pr-2 py-1 transition-transform
                          duration-300 ease-in-out hover:scale-110
                        `}
                        value={value}
                    >
                        <span className="text-[1rem]">watch sermon</span>
                        <img
                            src={PlayLogo}
                            alt="play logo"
                            className="h-[2.2rem] p-1.5 bg-[#f7fbff] rounded-full"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
