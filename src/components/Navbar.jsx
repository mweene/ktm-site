import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { 
  ListIcon,
  XIcon,
  CopyIcon, 
  EnvelopeIcon, 
  WhatsappLogoIcon, 
  InstagramLogoIcon,
  FacebookLogoIcon,
  YoutubeLogoIcon
} from "@phosphor-icons/react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav
            className={`
                fixed w-full bg-neutral-900/80 border-b border-b-neutral-600/50 p-4
                text=[#101c2b] md:py-4 md:px-10 backdrop-blur-xl z-4
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
                    <ListIcon size={22} />
                </a>
            </div>

            {isMenuOpen && <NavList onClose={() => setIsMenuOpen(false)} />}
        </nav>
    );
}

function NavList({ onClose }) {
    return (
        <div className="h-[100dvh] w-full absolute top-0 right-0 left-0 text-[#101c2b]">
            <div className="bg-neutral-950/90 h-[100dvh] w-full z-2 fixed"></div>
            <div className="h-[100dvh] border-l w-full md:w-3/7 z-5 bg-gray-50 top-0 bottom-0 right-0 fixed">
                <div className="flex flex-col place-content-between w-full h-full">
                    <div className="px-10 pt-10 grid">
                        <a
                            className="justify-self-end cursor-pointer text-left"
                            onClick={onClose}
                        >
                            <XIcon size={27} />
                        </a>

                        <h3 className="capitalize text-sm font-semibold mb-1">
                            pages
                        </h3>
                        <ul
                            className={`
                              font-semibold text-2xl flex flex-col gap-4
                              [&>li]:capitalize [&>li]:transition [&<li]:duration-300 [&>li]:ease-in-out
                              [&>li]:hover:text-neutral-500
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
    const [parentHovered, setParentHovered] = useState(false);
    const [popoverHovered, setPopoverHovered] = useState(false);

    const isOpen = parentHovered || popoverHovered;

    return (
        <div className="border-t w-full">
            <div className="p-10 grid gap-4">
                <div>
                    <h3 className="capitalize text-sm font-semibold mb-1">
                        lets talk
                    </h3>
                    <p
                        className="underline pb-2 text-2xl font-semibold relative"
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

                    <p className="mt-3">
                        Lusaka (Zambia){" "}
                        <span className="">00:22 Hrs</span>
                    </p>
                </div>

                <div className="mt-4">
                    <h3 className="capitalize text-sm font-semibold mb-2">
                        socials
                    </h3>
                    <ul
                        className={`
                          text-sm font-medium flex gap-2 [&>li]:flex [&>li]:place-content-between
                          [&>li]:place-items-base [&>li>a>img]:h-[1.3rem] [&>li]:transition
                          [&>li]:duration-300 [&>li]:ease-in-out [&>li]:hover:scale-110
                        `}
                    >
                        <li>
                            <a href="https://www.whatsapp.com">
                              <WhatsappLogoIcon size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com">
                              <FacebookLogoIcon size={20}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                              <InstagramLogoIcon size={20}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com">
                                <YoutubeLogoIcon size={20}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t px-10 py-4">
                <p className="text-neutral-700">
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
              absolute p-4 border bg-neutral-50 grid gap-3 rounded-2xl
              [&>p]:hover:font-medium [&>p]:hover:text-neutral-500 [&>p]:cursor-pointer
            `}
        >
            <button onClick={handleCopy} className="flex gap-1 items-center text-sm underline">
                <CopyIcon size={14} />
                <span>Copy email</span>
            </button>

            <p className="flex gap-1 items-center text-sm underline">
                <EnvelopeIcon size={14} />
                <span>Open mail client</span>
            </p>
        </div>
    );
}
