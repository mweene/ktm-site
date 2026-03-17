const groups = [
    {
        id: 1, 
        ageGroup: '3 - 10', 
        title: 'adventures', 
        description: 'Fun, story-based learning for the youngest members of our family'
    },
    {
        id: 2, 
        ageGroup: '3 - 10', 
        title: 'pathfinders', 
        description: 'Fun, story-based learning for the youngest members of our family'
    },
    {
        id: 3, 
        ageGroup: '3 - 10', 
        title: 'ambassadors', 
        description: 'Fun, story-based learning for the youngest members of our family'
    },
    {
        id: 4, 
        ageGroup: '3 - 10', 
        title: 'senior youths', 
        description: 'Fun, story-based learning for the youngest members of our family'
    },
    {
        id: 5, 
        ageGroup: 'women', 
        title: 'womens ministries', 
        description: 'Fun, story-based learning for the youngest members of our family'
    },
    {
        id: 6, 
        ageGroup: 'men', 
        title: 'mens ministries', 
        description: 'Fun, story-based learning for the youngest members of our family'
    },
]

function ProgramsCard({ageGroup, title, description, styles}) {
    return (
        <div className={`border p-4 rounded-xl ${styles}`}>
            <p className="pt-10">age {ageGroup}</p>
            <h4 className="capitalize font-medium">{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default function Programs() {
    return (
        <div className="">
            <div>
                <div className="">
                    <p className="uppercase">our programs</p>
                    <h2 className="text-5xl font-semibold">A place for every season of life</h2>
                </div>
                <p className="text-lg md:w-2/5">
                    Each program is rooted in the same mission growing through
                    Jesus Christ — but shaped for where you are right now.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-1 mt-8">
                {groups.map(ministry => (
                    <ProgramsCard 
                        key={ministry.id} 
                        title={ministry.title} 
                        ageGroup={ministry.ageGroup}
                        description={ministry.description}
                        syles='bg-pink-200'
                    />
                ))}
            </div>
        </div>
    );
}

