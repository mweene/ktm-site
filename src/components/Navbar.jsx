import { useState } from "react";
import Logo from "../assets/logo.svg";
import {X, Menu} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="relative">
            <div className="logo-section flex place-content-between place-items-center">
                <img src={Logo} alt="logo" className="logo h-[3rem]" />
                <a
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="cursor-pointer text-white"
                >
                    {isMenuOpen ? <X size={25} /> : <Menu size={25}/>}
                </a>
            </div>

            {isMenuOpen && <NavList />}
        </nav>
    );
}

function NavList() {
    return (
        <div className="absolute w-full left-0 text-left pt-4 z-2">
            <ul className="text-2xl flex flex-col gap-2 [&>li]:p-5 [&>li]:border">
                <li>home</li>
                <li>sermons</li>
                <li>events</li>
                <li>about us</li>
            </ul>
        </div>
    );
}
