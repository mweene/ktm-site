import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import {Menu, LucideCircleArrowRight, LucideXCircle} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="fixed w-full bg-neutral-900/80 border-b border-b-neutral-600/50 p-4 md:py-4 md:px-10 backdrop-blur-2xl z-2">
            <div className="logo-section flex place-content-between place-items-center relative">
                <img src={Logo} alt="logo" className="logo h-12" />
                <a
                    onClick={() => setIsMenuOpen(true)}
                    className="cursor-pointer text-white"
                >
                    <Menu size={25}/>
                </a>
            </div>

            {isMenuOpen && <NavList onClose={() => setIsMenuOpen(false)}/>}
        </nav>
    );
}

function NavList({onClose}) {
    return (
        <div className="absolute w-full md:w-2/6 top-0 right-0 px-8 py-6 z-3 bg-gray-100 backdrop-blur-2xl rounded-3xl">
            <div className="nav-menu flex place-content-between place-items-start pb-10">
                <p className=" text-sm text-gray-700">
                    Lusaka, Zambia{" "}
                    <span className="text-black font-medium">8:44</span> PM
                </p>
                <a className="flex gap-1 place-items-center cursor-pointer" onClick={onClose}>
                    <span>Close</span><LucideXCircle size={20}/>
                </a>
            </div>
            <ul className="font-medium text-2xl flex flex-col gap-5 [&>li]:text-gray-950 [&>li]:capitalize">
                <li><Link to="/">home</Link></li>
                <li><Link to="/sermons">sermons</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li className="contacts self-end">
                    <Contacts />
                </li>
            </ul>
        </div>
    );
}

function Contacts() {
    return (
        <ul className="text-sm font-medium flex flex-col gap-3 [&>li]:flex [&>li]:place-content-between [&>li]:place-items-center [&>li]:gap-4">
            <li>whatsApp <LucideCircleArrowRight size={17}/></li>
            <li>facebook <LucideCircleArrowRight size={17}/></li>
            <li>youtube <LucideCircleArrowRight size={17}/></li>
            <li>email <LucideCircleArrowRight size={17}/></li>
        </ul>
    )
}