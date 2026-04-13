import { ArrowLeft, ArrowRight } from "lucide-react";

const groups = [
    {
        id: 1,
        ageGroup: "3-12 Years",
        forWho: "kids",
        title: "junior programs",
        description: "For kids aged 3 - 12. Focus on fundamentals and fun.",
        color: "bg-[#4d0505]",
    },
    {
        id: 2,
        ageGroup: "13-18 Years",
        forWho: "teens",
        title: "pathfinders",
        description:
            "Fun, story-based learning for the youngest members of our family",
        color: "bg-[#043a02]",
    },
    {
        id: 3,
        ageGroup: "19-35 Years",
        forWho: "Young Adults",
        title: "ambassadors",
        description:
            "Fun, story-based learning for the youngest members of our family",
        color: "bg-[#c20000]",
    },
    {
        id: 4,
        ageGroup: "36-above",
        forWho: "men",
        title: "men's programs",
        description:
            "Fun, story-based learning for the youngest members of our family",
        color: "bg-[#020b40]",
    },
    {
        id: 5,
        ageGroup: "36-above",
        title: "women's programs",
        forWho: "women",
        description:
            "Fun, story-based learning for the youngest members of our family",
        color: "bg-[#0142be]",
    },
];

function ProgramsCard({ ageGroup, forWho, title, description, styles }) {
    const customStyles = `
      pcard rounded-4xl h-[27rem] w-[19rem] shadow
      bg-neutral-50 text-[#101c2b] flex flex-col ${styles}
    `;
    return (
        <div className={customStyles}>
            <div className="px-6 pt-6 pb-4">
                <p className="capitalize text-sm flex place-content-between place-items-center">
                    <span className="bg-neutral-200 rounded-full px-4 py-1">
                        {ageGroup}
                    </span>
                    <span className="">{forWho}</span>
                </p>
                <h3 className="capitalize font-medium text-4xl mb-2 mt-9">
                    {title}
                </h3>
                <p className="">{description}</p>
            </div>
            <div className="image bg-[#778db0] h-full rounded-4xl"></div>
        </div>
    );
}

export default function Programs() {
    return (
        <section className="overflow-hidden bg-[#e6ebef] rounded-4xl">
            <div className="flex place-content-between p-10 pb-5">
                <div className="">
                    <div className="text-[#101c2b]">
                        <p className="uppercase font-medium">
                            our programs
                        </p>
                        <h2 className="text-[4.5rem] leading-none font-semibold md:w-5/6">
                            A place for every season of life
                        </h2>
                    </div>
                </div>
                {/*
                <div className="self-end flex gap-4">
                    <button className="p-2 border-2 text-[#1f0d00]">
                        <ArrowLeft size={20} />
                    </button>
                    <button className="p-2 border-2 text-[#1f0d00]">
                        <ArrowRight size={20} />
                    </button>
                </div>
                */}  
            </div>

            <div className="carousel pb-10">
                <div className="flex gap-3 group pb-5">
                    {groups.map((ministry) => (
                        <ProgramsCard
                            key={ministry.id}
                            title={ministry.title}
                            ageGroup={ministry.ageGroup}
                            forWho={ministry.forWho}
                            description={ministry.description}
                        />
                    ))}
                </div>

                <div
                    className={`flex gap-3 group group2 aria-hidden="true" pb-5 hidden`}
                >
                    {groups.map((ministry) => (
                        <ProgramsCard
                            key={ministry.id}
                            title={ministry.title}
                            ageGroup={ministry.ageGroup}
                            forWho={ministry.forWho}
                            description={ministry.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
