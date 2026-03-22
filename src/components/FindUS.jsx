import Pin from "../assets/MaterialSymbolsLocationOnRounded.svg";

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
            <div className="grid md:grid-cols-2 place-items-center bg-green-200 w-fit rounded-3xl">
                <div className="bg-neutral-300 p-9 md:p-15 rounded-l-3xl">
                    <div className="header-text">
                        <p className="uppercase">find us</p>
                        <h2 className="text-5xl font-semibold">
                            Come worship with us
                        </h2>

                        <ul className="grid gap-6 mt-7.5">
                            {services.map((service) => (
                                <li
                                    key={service.id}
                                    className="flex place-content-between border-b border-neutral-500 pb-2.5"
                                >
                                    <span className="capitalize text-sm">
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

                <div className="text-center grid place-items-center">
                    <img src={Pin} alt="pin logo" className="h-16" />
                    <p className="font-medium">Katimamulilo SDA Church</p>
                    <p className="font-medium">Lusaka, Zambia</p>

                    <button className="uppercase border py-2 px-5">
                        get directions
                    </button>
                </div>
            </div>
        </section>
    );
}
