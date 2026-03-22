const groups = [
    {
        id: 1,
        ageGroup: "3-12 Years",
        forWho: "kids",
        title: "junior programs",
        description:
            "For kids aged 3 - 12. Focus on fundamentals and fun.",
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
    }
    
];

function ProgramsCard({ ageGroup, forWho, title, description, styles }) {
    const customStyles = `
      pcard rounded-4xl h-[27rem] w-[19rem] 
      bg-neutral-300 flex flex-col ${styles}
    `;
    return (
        <div className={customStyles}>
          <div className="px-6 pt-6 pb-4">
            <p className="capitalize text-sm flex place-content-between place-items-center">
              <span className="bg-neutral-50 rounded-full px-4 py-1">{ageGroup}</span>
              <span className="text-neutral-800">For {forWho}</span>
            </p>
            <h4 className="capitalize font-medium text-3xl my-4 w-2/4">{title}</h4>
            <p className="text-neutral-800">{description}</p>
          </div>
          <div className="image bg-pink-300 h-full rounded-4xl"></div>
        </div>
    );
}

export default function Programs() {
    return (
        <section className="overflow-hidden">
            <div>
                <div className="">
                    <p className="uppercase text-sm font-semibold text-neutral-600">
                        our programs
                    </p>
                    <h2 className="text-5xl font-semibold">
                        A place for every season of life
                    </h2>
                </div>
                <p className="text-lg w-4/6 md:w-2/4 text-neutral-800 mt-2">
                    Each program is rooted in the same mission growing through
                    Jesus Christ but shaped for where you are right now.
                </p>
            </div>

            <div className="carousel">
                <div className="flex gap-3 group">
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

                <div className={`flex gap-3 group group2 aria-hidden="true"`}>
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
