import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentSermons from "../components/RecentSermons";
import Beliefs from "../components/Beliefs";
import Events from "../components/Events";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer.jsx"

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

