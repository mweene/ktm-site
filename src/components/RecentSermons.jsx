import { LucidePlay } from "lucide-react";

export default function RecentSermons() {
    return (
        <section className="md:mt-30">
            <div className="mb-8">
                <p className="uppercase">recent sermons</p>
                <h2 className="text-5xl font-semibold">
                    Catch up with the word <br />
                    Anytime, anywhere
                </h2>
            </div>
            <div className="cards grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <Card
                    className="lg:col-span-2 transition-all duration-300 bg-[url(/src/assets/ktm1.jpg)]
                    bg-blend-luminosity"
                >
                    <div className="text flex flex-col place-content-center place-items-center h-full">
                        <div className="p-6 bg-white rounded-full w-fit place-self-center">
                            <LucidePlay size={22} />
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="[&>p]:text-lg flex flex-col place-content-between">
                        <div className="card-image py-20 bg-[url(/src/assets/ktm1.jpg)] bg-right bg-blend-luminosity rounded-xl"></div>
                        <div className="my-4 self-end">
                            <h3 className="font-medium text-lg capitalize">
                                All Things Work Together for Good
                            </h3>
                            <p className="text-neutral-800 mt-1">
                                A deep dive into trusting God's plan even in uncertain seasons of life.
                            </p>
                        </div>
                        <div className="flex place-content-between place-items-center pt-4">
                            <p className="font-medium">Galatians 20:6</p>
                            <span className="p-1.5 border rounded-full w-fit place-self-center">
                                <LucidePlay size={16} />
                            </span>
                        </div>
                    </div>
                </Card>
                
                <Card>
                    <div className="[&>p]:text-lg flex flex-col place-content-between">
                        <div className="card-image py-20 bg-[url(/src/assets/ktm1.jpg)] bg-right bg-blend-luminosity rounded-xl"></div>
                        <div className="my-4 self-end">
                            <h3 className="font-medium text-lg capitalize">
                                Return to Me: A Call to Renewal
                            </h3>
                            <p className="text-neutral-800 mt-1">
                                Exploring God's call to return to Him with our whole hearts.
                            </p>
                        </div>
                        <div className="flex place-content-between place-items-center pt-4">
                            <p className="font-medium">Malachi 4:7</p>
                            <span className="p-1.5 border rounded-full w-fit place-self-center">
                                <LucidePlay size={16} />
                            </span>
                        </div>
                    </div>
                </Card>

            </div>
        </section>
    );
}

function Card({ className, children }) {
    return (
        <div
            className={`card rounded-4xl bg-neutral-200 p-4 min-h-92 transition cursor-pointer [&>p]:text-lg ${className}`}
        >
            {children}
        </div>
    );
}
