import Hero from "../components/Hero";
import RecentSermons from "../components/RecentSermons";
import Programs from "../components/Programs";
import ActivityGallery from "../components/ActivityGallery";
import Calendar from "../components/Calendar";
import ResourcesComponent from '../components/ResourcesComponent'
import FindUS from "../components/FindUS";

export default function Home() {
    return (
        <div className="">
            <div className="top">
                <Hero />
            </div>
            
            <div className="grid md:gap-30">
                <RecentSermons />
                <Programs />
                <FindUS />
                <ActivityGallery />
                <Calendar /> 
                <ResourcesComponent />
            </div>
        </div>
    );
}
