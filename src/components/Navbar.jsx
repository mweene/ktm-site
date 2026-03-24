import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import facebook from "../assets/icons/facebook.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import {Menu, LucideCircleArrowRight, LucideX} from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
      setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`
          fixed w-full bg-neutral-900/80 border-b border-b-neutral-600/50 p-4 
          md:py-4 md:px-10 backdrop-blur-2xl z-2
        `}>
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
        <>
        <div className="nav-bg-blur bg-neutral-950/50 backdrop-blur-4xl h-[100dvh] w-full absolute top-0 right-0 left-0 bottom-0 z-2">
        </div>
        <div className="absolute h-[100dvh] border-l w-full md:w-2/5 z-3 bg-gray-50 top-0 bottom-0 right-0 backdrop-blur-2xl">
          <div className="flex flex-col place-content-between w-full h-full">

            <div className="px-10 pt-10 grid">
                <a className="justify-self-end cursor-pointer text-left" onClick={onClose}>
                    <LucideX size={25}/>
                </a>

              <h4 className="capitalize text-sm font-semibold text-neutral-700 mb-1">menu</h4>
              <ul className={`
                font-medium text-2xl flex flex-col gap-4 [&>li]:text-gray-950 
                [&>li]:capitalize [&>li]:transition [&<li]:duration-300 [&>li]:ease-in-out 
                [&>li]:hover:text-neutral-600
              `}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/sermons">sermons</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/events">events</Link></li>
                <li><Link to="/contact">contact</Link></li>
              </ul>
            </div>

            <Contacts />
          </div>
        </div>
      </>
    );
}

function Contacts() {
    return (
      <div className="border-t w-full">
        <div className="p-10 grid gap-4">
          <div>
            <h4 className="capitalize text-sm font-semibold text-neutral-700 mb-1">lets talk</h4>
            <p className="underline text-2xl font-medium">katimamulilosda@mail.co.zm</p>
            <p className="mt-4">Lusaka (Zambia) <span className="text-neutral-700">00:22 Hrs</span></p>
          </div>

          <div className="mt-6">
          <h4 className="capitalize text-sm font-semibold text-neutral-700 mb-2">socials</h4>
          <ul className={`
            text-sm font-medium flex gap-2 [&>li]:flex [&>li]:place-content-between
            [&>li]:place-items-base [&>li>img]:h-[1.3rem]
          `}>
              <li>
                <img src={whatsapp} alt="whatsapp logo" className="" />
              </li>
              <li>
                <img src={facebook} alt="facebook logo" className=""/>
              </li>
              <li>
                <img src={instagram} alt="instagram logo" className=""/>
              </li>
              <li>
                <img src={youtube} alt="youtube logo" className="h-[1.5rem]"/>
              </li>
          </ul>
          </div>
        </div>

        <div className="border-t px-10 pt-5 pb-4">
          <p className="text-neutral-700">(c) 2026 katimamulilo SDA Church. All Rights Reserved.</p>
        </div>
      </div>
    )
}

function EmailPopover() {
  return (
    <div className="absolute p-4 border">
      <p>copy email</p>
      <p>open email client</p>
    </div>
  )
}
