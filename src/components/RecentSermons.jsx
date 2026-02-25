export default function RecentSermons() {
    return (
        <section className="mt-8 mb-16">
            <div className="w-3/6">
                <h2 className="capitalize text-5xl font-medium">recent sermons</h2>
            <p className="text-lg text-neutral-800 my-4">
                Catch up with our most recent sermons. Watch or listen anytime, from anywhere. Let God's word speak to you.
            </p>
            </div>
            <div className="cards grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <Card className="lg:col-span-2 transition-all duration-300">

                </Card>
                <Card />
                <Card />
            </div>
        </section>
    );
}


function Card({className, children}) {
    return (
        <div className={`card rounded-2xl bg-neutral-200 p-4 min-h-68 transition cursor-pointer ${className}`}>
            <image alt="" src="" />
            <div className="text">  
                {children}
            </div>
        </div>
    );
}
