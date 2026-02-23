export default function BeliefsSection() {
    return (
        <section className="">
            <h2>our beliefs</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                ducimus fuga amet deleniti eaque repudiandae sunt magni eius
                sed.
            </p>

            <div className="cards">
                <BCard />
                <BCard />
                <BCard />
            </div>
        </section>
    );
}

function BCard() {
    return (
        <div>
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
