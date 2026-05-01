import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/logo.svg";
import { 
  ListIcon,
  XIcon,
  PlusIcon,
  CopyIcon, 
  EnvelopeSimpleIcon, 
  FacebookLogoIcon, 
  WhatsappLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon
} from "@phosphor-icons/react";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

  //get internet time when component renders

    useEffect(() => {
        setIsMenuOpen(false) 
    }, [location.pathname]);

    useEffect(() => {
      isMenuOpen ? 
          document.body.classList.add('overflow-hidden') :
          document.body.classList.remove('overflow-hidden')
        
        //cleanup when component unmounts
        return () => document.body.classList.remove('overflow-hidden')
    }, [isMenuOpen])
    

    return (
        <nav
            className={`
                fixed w-full bg-[#090f17]/70 border-b border-b-white/10 p-4
                text-[#101c2b] md:py-4 md:px-10 backdrop-blur-xl z-4
            `}
        >
            <div className="logo-section flex place-content-between place-items-center relative">
                <Link to="/">
                    <img src={Logo} alt="logo" className="logo h-11" />
                </Link>
                <a
                    onClick={() => setIsMenuOpen(true)}
                    className="cursor-pointer text-white"
                >
                    <ListIcon size={25} color="#fff" />
                </a>
            </div>

            {isMenuOpen && <NavList onClose={() => setIsMenuOpen(false)} />}
        </nav>
    );
}

function NavList({ onClose }) {
    return (
        <div className="h-[100dvh] w-full absolute inset-0 bg-[#060b12]/70 text-[#101c2b]">
            <div className="h-[100dvh] border-l w-full md:w-3/7 z-5 bg-[#e5e6e8] right-0 fixed">
                <div className="flex flex-col place-content-between w-full h-full">
                    <div className="px-10 pt-7 grid">
                        <a
                            className="justify-self-end cursor-pointer text-left"
                            onClick={onClose}
                        >
                            <XIcon size={25} weight="bold"/>
                        </a>

                        <h3 className="capitalize font-semibold mb-3 text-[#101c2b]/70">
                            Menu
                        </h3>
                        <ul
                            className={`
                              font-semibold text-3xl flex flex-col gap-3 w-fit
                              [&>li]:capitalize [&>li]:transition-all [&<li]:duration-300 
                              [&>li]:ease-in-out [&>li]:hover:scale-105
                            `}
                        >
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="/sermons">sermons</Link>
                            </li>
                            <li>
                                <Link to="/events">events</Link>
                            </li>
                            <li>
                                <Link to="/resources">resources</Link>
                            </li> 
                            <li>
                                <Link to="/about">about</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                    </div>

                    <Contacts />
                </div>
            </div>
        </div>
    );
}


function Contacts() {
    return (
        <div className="border-t border-t-[#101c2b]/60 w-full">
            <div className="px-10 py-5 grid gap-4">
                <div>
                    <h3 className="capitalize font-semibold mb-3 text-[#101c2b]/70">
                        let's talk
                    </h3>
                    <a  href="mailto:katimamulilosda@mail.com"
                        className="underline pb-2 text-2xl font-semibold relative flex items-center gap-1"
                    >
                        katimamulilosda@mail.co.zm
                    </a>
                    <a
                        className="underline font-semibold text-2xl"
                        href="tel:+260977110077"
                    >
                            +260 977 110 077
                    </a> 
                </div>

                <div className="mt-4">
                    <h3 className="capitalize font-semibold mb-3 text-[#101c2b]/70">
                        socials
                    </h3>
                    <ul
                        className={`
                          text-sm font-medium flex gap-2 [&>li]:flex [&>li]:place-content-between
                          [&>li]:place-items-base [&>li>a>img]:h-[1.3rem] [&>li]:transition-all
                          [&>li]:duration-300 [&>li]:ease-in-out [&>li]:hover:scale-105
                        `}
                    >
                        <li>
                            <a href="https://www.whatsapp.com">
                              <WhatsappLogoIcon size={25} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com"> 
                              <FacebookLogoIcon size={25} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                              <InstagramLogoIcon size={25} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com">
                              <YoutubeLogoIcon size={25} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-t-[#101c2b]/60 px-10 py-3">
                <p className="text-sm">
                    (c) 2026 katimamulilo SDA Church. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

