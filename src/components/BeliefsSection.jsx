export default function BeliefsSection() {
    return (
        <section className="">
            <h2 className="capitalize text-5xl font-medium">our beliefs</h2>
            
            <p className="text-lg text-neutral-800 my-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                ducimus fuga amet deleniti eaque repudiandae sunt magni eius
                sed.
            </p>

            <div className="cards grid gap-4">
                <BCard />
                <BCard />
                <BCard />
            </div>
        </section>
    );
}

function BCard() {
    return (
        <div className="bg-neutral-200 p-6 rounded-2xl">
            <div className="text">
                <h3>belief 1</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat, quas. Beatae rem, voluptas enim aliquid
                    voluptatibus qui maxime dolor
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
        </div>
    );
}
