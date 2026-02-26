import { useState } from "react";
import { Navigation } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState(false);
  return (
    <section className="Hero h-[93dvh] md:h-[88.25dvh] grid pb-4">
      <div className=" flex place-content-between pb-4">
        <div className="main-text place-self-end rounded-xl w-4/7">
          <h1 className="text-4xl md:text-6xl font-semibold text-white">His word lives.</h1>
          <h1 className="text-4xl md:text-6xl font-semibold text-white">Jesus, the son of God.</h1>
          <p className="my-4 text-gray-200 text-lg font-light">
            Join us this saturday and be part of spiritual growth through prayer and songs. Living through the teachings of our saviour jesus christ.
          </p>
          <button className="text-black bg-white font-medium">watch sermon</button>
        </div>
        <div
          className="location self-end cursor-pointer"
          onClick={() => setLocation(true)}>
          <div className="map bg-gray-800 text-white border-4 border-gray-200 rounded-4xl h-32 w-32 bg-[url('../assets/map.webp')] bg-cover flex place-content-end place-items-end">
            <span className="bg-blue-700 p-2 rounded-full h-fit text-center m-4">
              <Navigation size={19} color="white" strokeWidth={3}/>
            </span>
          </div>
        </div>
        {location && <ChurchMap onClose={() => setLocation(false)} />}
      </div>
    </section>
  );
}

function ChurchMap({ onClose }) {
  return (
    <div className="border">
      <div className="bg-pink-100">
        <button onClick={onClose}>close</button>
        <div className="">
          <p>google maps</p>
        </div>
      </div>
    </div>
  );
}
