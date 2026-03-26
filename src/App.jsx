import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    return (
		<div className="text-neutral-900">
			<Navbar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
				<Route path="/about" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			
			<Footer />
		</div>
    );
}
