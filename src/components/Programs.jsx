const groups = [
    {
        id: 1, 
        ageGroup: '3 - 10', 
        title: 'adventures', 
        description: 'Fun, story-based learning for the youngest members of our family',
        color: 'bg-[#4d0505]'
    },
    {
        id: 2, 
        ageGroup: '3 - 10', 
        title: 'pathfinders', 
        description: 'Fun, story-based learning for the youngest members of our family',
        color: 'bg-[#043a02]'
    },
    {
        id: 3, 
        ageGroup: '3 - 10', 
        title: 'ambassadors', 
        description: 'Fun, story-based learning for the youngest members of our family',
        color: 'bg-[#c20000]'
    },
    {
        id: 4, 
        ageGroup: '3 - 10', 
        title: 'senior youths', 
        description: 'Fun, story-based learning for the youngest members of our family',
        color: 'bg-[#020b40]'
    },
    {
        id: 5, 
        ageGroup: 'women', 
        title: 'womens ministries', 
        description: 'Fun, story-based learning for the youngest members of our family',
        color: 'bg-[#0142be]'
    },
    {
        id: 6, 
        ageGroup: 'men', 
        title: 'mens ministries', 
        description: 'Fun, story-based learning for the youngest members of our family',
        color: 'bg-[#01062f]'
    },
]

function ProgramsCard({ageGroup, title, description, styles}) {
    return (
        <div className={`p-7  rounded-4xl text-white ${styles}`}>
            <p className="pt-10 uppercase text-sm">ages {ageGroup}</p>
            <h4 className="capitalize font-medium text-lg">{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default function Programs() {
    return (
        <div className="">
            <div>
                <div className="">
                    <p className="uppercase text-sm font-semibold text-neutral-600">our programs</p>
                    <h2 className="text-5xl font-semibold">A place for every season of life</h2>
                </div>
                <p className="text-lg w-4/6 md:w-2/4 text-neutral-800 mt-2">
                    Each program is rooted in the same mission growing through
                    Jesus Christ but shaped for where you are right now.
                </p>
            </div>
            
            <div className="carousel">
              <div className="flex gap-3 mt-8 border-2 group">
                {groups.map(ministry => (
                  <ProgramsCard 
                    key={ministry.id} 
                    title={ministry.title} 
                    ageGroup={ministry.ageGroup}
                    description={ministry.description}
                    styles={ministry.color}
                  />
                ))}
              </div>
              
              <div className={`flex gap-3 group group2 aria-hidden="true"`}>
                {groups.map(ministry => (
                  <ProgramsCard 
                    key={ministry.id}
                    title={ministry.title}
                    ageGroup={ministry.ageGroup}
                    description={ministry.description}
                    styles={ministry.color}
                  />
                ))}
              </div>
            </div>
        </div>
    );
}

