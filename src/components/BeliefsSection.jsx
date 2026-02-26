export default function BeliefsSection() {
    return (
        <section className="">
            <div className="md:w-4/7">
                <h2 className="uppercase text-[1.01rem] font-bold text-neutral-600">our beliefs</h2>
            
                <p className="text-4xl mt-1.5 mb-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                    ducimus fuga amet ipsum dolor promising.
                </p>
            </div>

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
