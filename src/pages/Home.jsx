import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentSermons from "../components/RecentSermons";
import Beliefs from "../components/Beliefs";
import Events from "../components/Events";

export default function Home() {
    return (
        <>
            <div className="top p-4 md:py-4 md:px-10">
              <Navbar />
              <Hero />
            </div>
            <div className="px-6 py-4 lg:px-16 lg:py-12">
                <RecentSermons />
                <Beliefs />
                <Events />
                <Calendar />
            </div>
            <Footer />
        </>
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
