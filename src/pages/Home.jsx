import Hero from "../components/Hero";
import RecentSermons from "../components/RecentSermons";
import Programs from "../components/Programs";
import Events from "../components/Events";
import Calendar from "../components/Calendar";

export default function Home() {
    return (
        <>
            <div className="top p-4 md:py-4 md:px-10">
                <Hero />
            </div>
            <div className="px-6 py-4 md:px-10 lg:py-12">
                <RecentSermons />
                <Programs />
                <Events />
                <Calendar />
            </div>
        </>
    );
}
