import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
    return (
		<div className="text-neutral-900">
			<Navbar />
			
      <ScrollToTop /> {/*scroll to the top of page on link click*/}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sermons" element={<Sermons />} />
        <Route path="/events" element={<Events />} />
				<Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			
			<Footer />
		</div>
    );
}
