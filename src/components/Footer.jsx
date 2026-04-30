import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import {
  EnvelopeSimpleIcon,
  PhoneIcon,
  FacebookLogoIcon, 
  WhatsappLogoIcon, 
  InstagramLogoIcon, 
  YoutubeLogoIcon 
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <section className="bg-[#101c2b] [&_li]:capitalize [&_li]:text-xl font-light text-white [&_h3]:text-white/50 ">

    <div className="px-10 py-10 md:mt-30 md:flex place-content-between">
      <div className="">
        <div className="w-fit h-fit">
		      <img src={Logo} alt="logo" className="md:h-[9rem]" />
        </div>

        <div className={`
          socials flex gap-4 mt-5 [&_a]:transition-all [&_a]:duration-500
          [&_a]:ease-in-out [&_a]:hover:scale-105
        `}>
          <a href=""><WhatsappLogoIcon size={30}/></a>
          <a href=""><FacebookLogoIcon size={30}/></a>
          <a href=""><InstagramLogoIcon size={30}/></a>
          <a href=""><YoutubeLogoIcon size={30}/></a>
          <a href=""><EnvelopeSimpleIcon size={30}/></a>
          <a href=""><PhoneIcon size={30}/></a>
        </div>
      </div>

      <div className={`md:flex gap-15 [&_li]:transition-all [&_li]:duration-500
        [&_li]:ease-in-out [&_li]:hover:scale-105
      `}>
		    <div className="p-4">
          <h3 className="capitalize mb-2">media</h3>
      
          <ul className="grid gap-4">
            <li><Link to="/sermons">sermons</Link></li>
            <li><Link to="/gallery">gallery</Link></li>
            <li><Link to="/resources">resources</Link></li>
          </ul>
        </div>  

        <div className="p-4">
          <h3 className="capitalize mb-2">church</h3>
      
          <ul className="grid gap-4">
            <li><Link to="/">home</Link></li>
            <li><Link to="/sermons">sermons</Link></li>
            <li><Link to="/events">events</Link></li>
            <li><Link to="/about">about us</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </div>
      </div>
    </div>

      <div className="border-t border-white/10 px-10 pt-5 pb-20 flex place-content-between">
        <p className="">ktm sda church. lusaka, zambia</p>
        <p>Copyright (c) 2026 Author. All Rights Reserved.</p>      
      </div>
    </section>
  )
}
