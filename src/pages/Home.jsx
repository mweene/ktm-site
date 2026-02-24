import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentSermons from "../components/RecentSermons";
import BeliefsSection from "../components/BeliefsSection";

export default function Home() {
    return (
        <>
            <div className="top py-4 px-10">
              <Navbar />
              <Hero />
            </div>
            <RecentSermons />
            <BeliefsSection />
            <RecentEvents />
            <Calendar />
            <Footer />
        </>
    );
}

function RecentEvents() {
    return (
        <div className="">
            <h3>recent events</h3>
            <div className="">
                <div className="buttons"></div>
                <div className="gallery"></div>
            </div>
        </div>
    );
}

function Calendar() {
    return (
        <div className="">
            <h3>our church calendar</h3>
            <div className="">
                <div className="calendar"></div>
                <div className="calendar-popup"></div>
            </div>
        </div>
    );
}

function Footer() {
    return <div className="">footer</div>;
}
