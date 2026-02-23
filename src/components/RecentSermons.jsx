export default function RecentSermons() {
    return (
        <section className="">
            <h2>recent sermons</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias similique ut voluptate. Nihil asperiores rerum labore
                placeat consequatur illo assumenda repudiandae molestiae eum
                dolore.
            </p>
            <div className="cards flex gap-4">
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

const handleWatchSermon = (link) => {
    console.log(link);
};

function Card() {
    return (
        <div className="card bg-emerald-100">
            <image alt="" src="" />
            <div className="text">
                <h3>jesus saves</h3>
                <p>lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <button onClick={() => handleWatchSermon("webstore")}>
                    watch
                </button>
            </div>
        </div>
    );
}
