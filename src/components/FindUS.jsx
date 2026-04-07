import { ArrowRight, MapPin } from "lucide-react";

export default function FindUS() {
    const services = [
        { id: 1, name: "sabbath school", time: "09:00" },
        { id: 2, name: "classes", time: "10:00" },
        { id: 3, name: "main service", time: "11:00" },
        { id: 4, name: "lunch", time: "13:00" },
        { id: 5, name: "bible study", time: "15:00" },
    ];

    return (
        <section className="grid place-content-center">
            <div className="grid md:grid-cols-2 place-items-center text-neutral-50 w-fit rounded-4xl">
                <div className="text-[#341600] p-9 md:p-15 rounded-l-4xl">
                    <div className="header-text">
                        <p className="uppercase">find us</p>
                        <h2 className="text-[4rem] leading-none font-semibold">
                            Come worship with us
                        </h2>

                        <ul className="grid gap-6 mt-7.5">
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className="flex place-content-between border-b border-[#341600] pb-2.5"
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
                
                <div className="h-full w-full grid place-content-center bg-cover bg-[url('https://picsum.photos/id/900/900')] rounded-4xl">
                    <div className="text-center grid place-items-center bg-[#341600]/90 backdrop-blur p-4 px-6 w-fit rounded-2xl">
                        <p className="font-medium text-xl mt-2">
                            Katimamulilo SDA Church<br />
                            Lusaka, Zambia
                        </p>

                        <button className="uppercase text-xs border mt-7 py-1 pr-1 pl-5 flex items-center gap-2 rounded-full">
                            get directions
                            <span className="bg-neutral-50 text-[#341600] rounded-full p-1 text-neutral-50">  
                            <ArrowRight color="#341600" size={20}/>
                            </span>  
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
