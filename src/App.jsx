import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Sermons from "./pages/Sermons";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    return (
		<>
			<Navbar />
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sermons" element={<Sermons />} />
				<Route path="/about" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
			
			<Footer />
		</>
    );
}
