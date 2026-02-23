import { useState } from "react";

export default function Navbar() {
    const [navMenu, setNavMenu] = useState(false);
    return (
        <nav className="bg-indigo-200">
            <div className="logo-section flex place-content-between">
                <img src="" alt="logo" className="logo" />
                <button
                    onClick={() => setNavMenu((prev) => !prev)}
                    className="cursor-pointer"
                >
                    {navMenu ? "close" : "open"}
                </button>
            </div>

            {navMenu && <NavList />}
        </nav>
    );
}

function NavList() {
    return (
        <div className="">
            <ul>
                <li>home</li>
                <li>sermons</li>
                <li>events</li>
                <li>about us</li>
            </ul>
        </div>
    );
}
