import { Link } from "react-router-dom";
import Logo from "../assets/footerLogo.png";

export default function Footer() {
  return (
    <section>
    <div className="px-4 py-10 bg-neutral-300 grid md:grid-cols-4 gap-4 md:mt-30">
      <div>
		    <img src={Logo} alt="logo" className="h-[14rem]" />
      </div>

		  <div className="p-4">
        <h3 className="uppercase font-semibold mb-2">media</h3>
      
        <ul className="grid gap-2">
          <li><Link to="/sermons">sermons</Link></li>
          <li><Link to="/gallery">gallery</Link></li>
        </ul>
      </div>
      
      <div className="p-4">
        <h3 className="uppercase font-semibold mb-2">socials</h3>
      
        <ul className="grid gap-2">
          <li>facebook</li>
          <li>instagram</li>
          <li>youtube</li>
          <li>whatsapp</li>
          <li>email</li>
        </ul>
      </div>

        <div className="p-4">
          <h3 className="uppercase font-semibold mb-2">church</h3>
      
          <ul className="grid gap-2">
            <li><Link to="/">home</Link></li>
            <li><Link to="/sermons">sermons</Link></li>
            <li><Link to="/events">events</Link></li>
            <li><Link to="/about">about us</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-neutral-700 text-neutral-300 px-7.5 py-4 flex place-content-between text-sm">
        <p className="">ktm sda church. lusaka, zambia</p>
        <p>Copyright (c) 2026 Author. All Rights Reserved.</p>      
    </div>
    </section>
  )
}
