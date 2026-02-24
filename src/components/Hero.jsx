import { useState } from "react";

export default function Hero() {
  const [location, setLocation] = useState(false);
  return (
    <section className="Hero h-[35rem] grid">
      <div className=" flex place-content-between pb-4">
        <div className="main-text place-self-end rounded-xl w-2/5">
          <h1 className="text-5xl font-semibold text-white">His word lives</h1>
          <h1 className="text-5xl font-semibold text-white">Jesus the son of God</h1>
          <p className="my-4 text-gray-200 font-light">
            Join us this saturday and be part of spiritual growth through prayer and songs. Living through the teachings of our saviour jesus christ.
          </p>
          <button className="text-black bg-white font-medium">watch sermon</button>
        </div>
        <div
          className="location self-end cursor-pointer"
          onClick={() => setLocation(true)}>
          <div className="map bg-gray-800 text-white border-4 border-white rounded-4xl h-[9rem] w-[9rem] bg-[url('../assets/map.webp')] bg-cover">

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
