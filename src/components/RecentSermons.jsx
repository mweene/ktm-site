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

                <Card className="bg-pink-400">
                  <div className="p-4">
                    <p className="border p-0.5 rounded-full text-sm w-fit">eld m. milanzi</p>
                    <h3 className="text-4xl">jesus of nazareth</h3>
                    
                    <div className="flex gap-2">
                      <p>week of prayer</p> 
                      <p>21 march 2026</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <p>watch sermon</p>
                      <span><LucidePlay /></span>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-pink-700">
                    <div className="[&>p]:text-lg flex flex-col place-content-between">
                    </div>
                </Card>
            </div>
            <p>more sermons</p>
        </section>
    );
}

function Card({ className, children }) {
    return (
        <div
            className={`
              card rounded-4xl min-h-92 
              transition cursor-pointer [&>p]:text-lg ${className}
            `}
        >
            {children}
        </div>
    );
}
