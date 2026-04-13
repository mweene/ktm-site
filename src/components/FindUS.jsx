import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Pattern from "../assets/grid.svg";

export default function FindUS() {
    const [isMapOpen, setIsMapOpen] = useState(false);

    const services = [
        { id: 1, name: "sabbath school", time: "09:00" },
        { id: 2, name: "classes", time: "10:00" },
        { id: 3, name: "main service", time: "11:00" },
        { id: 4, name: "lunch", time: "13:00" },
        { id: 5, name: "bible study", time: "15:00" },
    ];

    return (
        <section className="grid place-content-center relative">
            <div className="grid md:grid-cols-2 place-items-center text-neutral-50 w-fit rounded-4xl">
                <div className="text-[#101c2b] p-9 md:p-15 rounded-l-4xl">
                    <div className="header-text">
                        <p className="uppercase">find us</p>
                        <h2 className="text-[4.5rem] leading-none font-semibold">
                            Join us this sabbath
                        </h2>

                        <ul className="grid gap-6 mt-10">
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className="flex place-content-between border-b border-[#afb6bd] pb-2.5"
                                >
                                    <span className="capitalize">
                                        {service.name}
                                    </span>
                                    <span className="font-medium">
                                        {service.time} Hrs
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div 
                    className={`
                      h-full w-full grid place-content-center 
                      rounded-4xl bg-repeat bg-[length:200px_200px]
                      bg-[#b8bfc6]
                    `}
                    style={{backgroundImage: `url(${Pattern})` }}
                >
                    <div className={`
                      text-center grid place-items-center bg-[#101c2b] 
                      backdrop-blur p-4 px-6 w-fit rounded-2xl mt-[10rem]
                    `}>
                        <p className="font-medium text-xl mt-2">
                            Katimamulilo SDA Church<br />
                            Lusaka, Zambia
                        </p>

                        <button
                            onClick={() => setIsMapOpen(prev => !prev)}
                            className={`
                              capitalize bg-[#f7fbff] text-[#101c2b] mt-7 py-1
                              pr-1 pl-5 flex items-center gap-2 rounded-full font-semibold
                              transition-transform duration-300 ease-in-out hover:scale-110
                            `}
                        >
                            get directions
                            <span className="bg-[#101c2b] rounded-full p-1 text-neutral-50">  
                                <ArrowRight color="#f7fbff" size={20}/>
                            </span>  
                        </button>
                    </div>
                </div>
            </div>
            {isMapOpen && <MapModal onClose={() => setIsMapOpen(false)}/>}
        </section>
    );
}

function MapModal({onClose}) {
    return (
        <div className="absolute border border-[#101c2b]/70 bg-[#f7fbff] rounded-2xl text-end left-0 ml-40">
            <button onClick={onClose} className="m-4 "><X color="#101c2b" size={25} /></button>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7109405328506!2d28.2883146745561!3d-15.392133385193539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f54d65c1438f%3A0x7de8dbad5a3238fa!2sKatimamulilo%20Sda%20Church!5e0!3m2!1sen!2szm!4v1775839437091!5m2!1sen!2szm" 
                className={`border-none h-[70dvh] w-[40dvw] rounded-b-2xl text-left`}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}
