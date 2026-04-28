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
} from "@phosphor-icons/react";

import { 
  facebookLogo, 
  whatsappLogo,
  instagramLogo,
  youtubeLogo
} from "../assets/icons";

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

//should go in the utils
const getTime = async () => {
  const url = 'api/api/v1/timezone/zone';

  try {
    const res = await axios.get(url, {
      params: {
        timeZone: 'Africa/Lusaka'
      }
    })
    const data = await res.data
    return data['local_time'].split('T')[1].split('.')[0]
  } catch(err) {
    return err
  }
}


function Contacts() {
    const [parentHovered, setParentHovered] = useState(false);
    const [popoverHovered, setPopoverHovered] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
      const t = getTime();
      console.log(t);
      setTime(t);
    }, [])   

    const isOpen = parentHovered || popoverHovered;

    return (
        <div className="border-t border-t-[#101c2b]/60 w-full">
            <div className="px-10 py-5 grid gap-4">
                <div>
                    <h3 className="capitalize font-semibold mb-3 text-[#101c2b]/70">
                        let's talk
                    </h3>
                    <p
                        className="underline pb-2 text-3xl font-semibold relative flex items-center gap-1"
                        onMouseEnter={() => setParentHovered(true)}
                        onMouseLeave={() => setParentHovered(false)}
                    >
                        katimamulilosda@mail.co.zm
                    </p>
                    {isOpen && (
                        <EmailPopover
                            onMouseEnter={() => setPopoverHovered(true)}
                            onMouseLeave={() => setPopoverHovered(false)}
                        />
                    )}

                    <p className="mt-3 font-semibold">
                        Lusaka (ZM){" "}
                        <span className="text-[#101c2b]/70">{time} Hrs</span>
                    </p>
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
                              <img src={whatsappLogo} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com">
                              <img src={facebookLogo} alt="" className="h-[10em]"/> 
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                              <img src={instagramLogo} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com">
                              <img src={youtubeLogo} alt="" />  
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

function EmailPopover({ onMouseEnter, onMouseLeave }) {
    const text = 'copy me to the clipboard please'

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text)
        console.log('text copied succesfully')
      } catch(error) {
        console.error(error)
      }
    }

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
              absolute p-4 border border-[#101c2b]/70 bg-[#e5e6e8] 
              shadow-lg grid gap-3 rounded-2xl [&>*]:hover:font-medium 
              [&>*]transition-all [&>*]:duration-500 [&>*]:ease-in-out
              [&>*]:hover:scale-102
            `}
        >
            <button onClick={handleCopy} className="flex gap-1 items-center underline">
                <CopyIcon size={17} weight="bold"/>
                <span>Copy email</span>
            </button>

            <a 
              href="mailto:katimamulilosda@gmail.com"
              className="flex gap-1 items-center underline"
            >
                <EnvelopeSimpleIcon size={17} weight="bold"/>
                <span>Open mail client</span>
            </a>
        </div>
    );
}
