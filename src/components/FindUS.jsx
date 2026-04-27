import { useState } from "react";
import { CaretRightIcon, XIcon } from "@phosphor-icons/react";
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
        <section className="grid place-content-center relative bg-[#101c2b] py-15 md:px-20">
            <div className="grid md:grid-cols-2 gap-20 place-items-center text-fff p-5">
                <div className="text-[#fff] rounded-l-4xl">
                    <div className="header-text">
                        <p className="capitalize text-xl font-medium mb-5 text-[#9fa4aa]">find us</p>
                        <h2 className="text-[4.5rem] leading-none font-semibold">
                            Join us this sabbath
                        </h2>

                        <ul className="grid gap-6 mt-10">
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className="flex place-content-between border-b border-[#afb6bd] pb-2.5 text-[#9fa4aa]"
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
                      bg-[#e5e6e8]
                    `}
                    style={{backgroundImage: `url(${Pattern})` }}
                >
                    <div className={`
                      text-center grid place-items-center bg-[#101c2b] 
                      backdrop-blur p-4 px-6 w-fit rounded-3xl mt-[10rem]
                      transition-transform duration-500 ease-in-out hover:scale-102
                    `}>
                        <p className="font-medium text-xl text-white mt-2">
                            Katimamulilo SDA Church<br />
                            Lusaka, Zambia
                        </p>

                        <button
                            onClick={() => setIsMapOpen(prev => !prev)}
                            className={`
                              capitalize bg-[#fff] text-[#101c2b] mt-7 py-1
                              pr-1 pl-5 flex items-center gap-2 rounded-full font-semibold
                              transition-all duration-500 ease-in-out hover:bg-[#e5e6e8]
                            `}
                        >
                            get directions
                            <span className="bg-[#101c2b] rounded-full p-2 text-neutral-50">  
                                <CaretRightIcon color="#f7fbff" size={20}/>
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
        <div className="absolute shadow-[0_0_8px_1px_#101c2b36] bg-[#fff] p-4 rounded-4xl text-end top-0 mt-[21rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button onClick={onClose} className="m-2"><XIcon color="#101c2b" size={25} /></button>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.7109405328506!2d28.2883146745561!3d-15.392133385193539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f54d65c1438f%3A0x7de8dbad5a3238fa!2sKatimamulilo%20Sda%20Church!5e0!3m2!1sen!2szm!4v1775839437091!5m2!1sen!2szm" 
                className={`border-none h-[70dvh] w-[40dvw] rounded-2xl text-left`}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
    )
}
