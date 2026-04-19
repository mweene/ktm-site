import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, CaretRightIcon, PlayIcon } from "@phosphor-icons/react";
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
            <div className="mb-12 flex place-content-between">
                <div className="">
                    <p className="capitalize font-medium text-xl mb-4">recent sermons</p>
                    <h2 className="text-[4.5rem] leading-none font-semibold">
                        Catch up with the word <br />
                        Anytime, anywhere
                    </h2>
                </div>

                <a
                    href="/sermons"
                    className="self-end flex capitalize items-center gap-0.5 hover:underline"
                >
                    more sermons 
                    <span className="text-[#244267]"> 
                      <CaretRightIcon  size={15} weight="bold"/>
                    </span>
                </a>
            </div>
            <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className={`
                    lg:col-span-2 min-h-[23rem] [&_video]:!h-full [&_video]:!w-full 
                    [&_video]:!object-cover
                `}>
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
          card rounded-4xl min-h-92 bg-[#e5e6e8] hover:scale-102
          text-[#101c2b] transition-all duration-500 ease-in-out
        `}>
            <div className="card-content p-6 grid place-content-between h-full">
                <p className="py-1 px-4 rounded-full font-medium text-sm bg-[#c9ccd0] capitalize w-fit">
                    {preacher}
                </p>
                <div className="grid">
                    <h3 className="text-4xl font-semibold">
                        {title}
                    </h3>

                    <div
                        className={`
                            flex gap-4 mt-2 capitalize
                            text-[#101c2b]
                        `}
                    >
                        <p>{date}</p>
                        <p>{program}</p>
                    </div>

                    <button
                        onClick={onClick}
                        className={`
                          mt-10 capitalize w-fit rounded-full p-2.5
                          bg-[#101c2b] text-[#e5e6e8] transition-all
                          duration-500 ease-in-out hover:bg-[#2a3542]
                        `}
                        value={value}
                    >
                        <PlayIcon weight="fill"/>
                    </button>
                </div>
            </div>
        </div>
    );
}
