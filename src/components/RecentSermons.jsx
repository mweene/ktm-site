import { LucidePlay } from "lucide-react";

export default function RecentSermons() {
    return (
        <section className="my-14 mb-30">
            <div className="md:w-4/7">
                <h2 className="uppercase text-[1.01rem] font-bold text-neutral-600">
                    recent sermons
                </h2>
                <p className="text-4xl mt-1.5 mb-6">
                    Catch up with our most recent sermons. 
                    Watch or listen anytime, from anywhere.
                </p>
            </div>
            <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <Card 
                    className="lg:col-span-2 transition-all duration-300 bg-[url(/src/assets/ktm1.jpg)] 
                    bg-blend-luminosity"
                >
                    <div className="text flex flex-col place-content-between h-full">
                        <p className="flex place-content-between">top text <span>more text</span></p>
                        <span className="p-6 bg-white rounded-full w-fit place-self-center">
                            <LucidePlay size={22}/>
                        </span>
                        <p>bottom text</p>
                    </div>
                </Card>


                <Card>
                    <div className="[&>p]:text-lg flex flex-col place-content-between">
                        <div className="card-image py-20 bg-[url(/src/assets/ktm1.jpg)] bg-right bg-blend-luminosity rounded-xl">
                        </div>
                        <div className="my-4 self-end">
                            <h4 className="font-medium text-xl capitalize">eligendi rerum</h4>
                            <p className="text-neutral-800 text-lg">
                                sit amet consectetur adipisicing elit. Minima 
                                amet autem libero, eligendi rerum deleniti 
                            </p>
                        </div>
                        <div className="flex place-content-between place-items-center">
                            <p className="font-medium">Galatians 20:6</p>
                            <span className="p-2 bg-neutral-900 rounded-full w-fit place-self-center">
                                <LucidePlay size={16} color="white"/>
                            </span>
                        </div>
                    </div>
                </Card>


                <Card>
                    <div className="[&>p]:text-lg flex flex-col place-content-between">
                        <div className="card-image py-20 bg-[url(/src/assets/ktm1.jpg)] bg-top bg-blend-luminosity rounded-xl">
                        </div>
                        <div className="my-4 self-end">
                            <h4 className="font-medium text-xl capitalize">consectetur</h4>
                            <p className="text-neutral-800 text-lg">
                                sit amet consectetur adipisicing elit. Minima 
                                amet autem libero, eligendi rerum deleniti 
                            </p>
                        </div>
                        <div className="flex place-content-between place-items-center">
                            <p className="font-medium">Malachi 4:7</p>
                            <span className="p-2 bg-neutral-900 rounded-full w-fit place-self-center">
                                <LucidePlay size={16} color="white"/>
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}


function Card({className, children}) {
    return (
        <div className={`card rounded-4xl bg-neutral-200 p-4 min-h-92 transition cursor-pointer [&>p]:text-lg ${className}`}>
            {children}
        </div>
    );
}
