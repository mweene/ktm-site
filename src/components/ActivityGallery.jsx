import { useState } from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

const data = [
  {
    "id": 1,
    "activityName": "Outreach",
    "slug": "outreach",
    "grid": [
      { "id": "a1-00", "type": "image", "src": "https://picsum.photos/id/220/600/400?grayscale", "span": "col-span-1" },
      { "id": "a1-01", "type": "video", "src": "https://lorem.video/720p_h264_10s", "span": "col-span-3" },
      { "id": "a1-02", "type": "image", "src": "https://picsum.photos/id/221/600/400?grayscale", "span": "col-span-2" },
      { "id": "a1-03", "type": "text",  "content": "Fun", "span": "col-span-1", "bgColor": "bg-blue-500" },
      { "id": "a1-04", "type": "text", "content": "more fun, everyday", "span": "col-span-2", "bgColor": "bg-neutral-300"},
      { "id": "a1-05", "type": "video", "src": "https://lorem.video/cat_128kbps", "span": "col-span-1" },
      { "id": "a1-06", "type": "images", "src": "https://picsum.photos/id/122/600/400?grayscale", "span": "col-span-4" },
    ]
  },
  {
    "id": 2,
    "activityName": "Local",
    "slug": "local",
    "grid": [
      { "id": "a2-00", "type": "image", "src": "https://picsum.photos/id/320/600/400?grayscale", "span": "col-span-1" },
      { "id": "a2-01", "type": "video", "src": "https://lorem.video/720p_h264_5s", "span": "col-span-3" },
      { "id": "a2-02", "type": "image", "src": "https://picsum.photos/id/321/600/400?grayscale", "span": "col-span-2" },
      { "id": "a2-03", "type": "text",  "content": "Joy", "span": "col-span-1", "bgColor": "bg-green-500" },
      { "id": "a2-04", "type": "image", "src": "https://picsum.photos/id/322/600/400?grayscale", "span": "col-span-2" },
      { "id": "a2-05", "type": "image", "src": "https://picsum.photos/id/323/600/400?grayscale", "span": "col-span-1" },
      { "id": "a1-06", "type": "images", "src": "https://picsum.photos/id/324/600/400?grayscale", "span": "col-span-4" },      
    ]
  },
  {
    "id": 3,
    "activityName": "personal Ministry",
    "slug": "personal ministries",
    "grid": [
      { "id": "a3-00", "type": "image", "src": "https://picsum.photos/id/420/600/400?grayscale", "span": "col-span-1" },
      { "id": "a3-01", "type": "video", "src": "https://lorem.video/720p_h264_15s", "span": "col-span-3" },
      { "id": "a3-02", "type": "image", "src": "https://picsum.photos/id/421/600/400?grayscale", "span": "col-span-2" },
      { "id": "a3-03", "type": "text",  "content": "Love", "span": "col-span-1", "bgColor": "bg-red-500" },
      { "id": "a3-04", "type": "image", "src": "https://picsum.photos/id/427/600/400?grayscale", "span": "col-span-2" },
      { "id": "a3-05", "type": "image", "src": "https://picsum.photos/id/426/600/400?grayscale", "span": "col-span-1" },
      { "id": "a1-06", "type": "images", "src": "https://picsum.photos/id/424/600/400?grayscale", "span": "col-span-4" },      
    ]
  }
];

function EventCard({className, type, src, content}) {
  const [index, setIndex] = useState(0);

  const imagesList = [
    'https://picsum.photos/id/600/600/400?grayscale',
    'https://picsum.photos/id/605/600/400?grayscale',
    'https://picsum.photos/id/602/600/400?grayscale'
  ];

  const handlePrev = () => setIndex(prev => prev - 1);
  const handleNext = () => setIndex(prev => prev + 1);

  const styles = `
    rounded-4xl overflow-hidden relative h-[20rem] ${className}
    bg-neutral-300
  `;

  return (
    <div className={styles}>
      {type === 'image' && (
        <img 
          src={src} 
          alt="some random image" 
          className={`
            w-full h-full object-cover rounded-xl transition
            duration-300 ease-in-out hover:scale-130
          `}
        />
      )}

      {type === 'images' && (
        <>
          <img src={imagesList[index]} alt="some image" className="w-full h-full object-cover rounded-4xl" />
          
          <div className="absolute bottom-0 right-0 m-6.5 flex gap-4">
            <button onClick={handlePrev} 
              className="rounded-full p-2 bg-neutral-100/90 transition duration-300 ease-in-out hover:scale-110"
            >
              <ArrowLeft size={20}/>
            </button>

            <button onClick={handleNext} 
              className="rounded-full p-2 bg-neutral-100/90 transition duration-300 ease-in-out hover:scale-110"
            >
              <ArrowRight size={20}/>
            </button>
          </div>
        </>
      )}

      {type === 'video' && (
        <video src={src} autoPlay loop muted className="w-full h-full object-cover rounded-4xl"/>
      )}

      {type === 'text' && (
        <div className="w-full h-full bg-gradient-to-tl from-neutral-400 to-neutral-700 text-blue-50 flex place-content-center place-items-center text-5xl font-bold rounded-4xl">
          {content}
        </div>
      )}
    </div>
  )
}

export default function ActivityGallery () {
  const [activity, setActivity] = useState(data[0]);
  const [activeButton, setActiveButton] = useState(data[0].activityName);

  const handleActivity = (event) => {
    const newActivity = data.find(d => d.activityName === event.target.value);
    setActivity(newActivity);
    
    setActiveButton(event.target.value);
  }

  return (
      <>
        <div>
          <p className="uppercase font-medium text-[#341600]">our gallery</p>

          <div className="flex place-content-between pb-10">
            <h2 className="text-[4rem] text-[#341600] font-semibold leading-none md:w-4/6">
              Get a glimpse into our activities
            </h2>

            <div className="flex gap-2 self-end">
              {data.map(d => (
                <button 
                  key={d.id} 
                  value={d.activityName}
                  className={`
                    text-[#341600] px-6 py-3 border border-[#341600] 
                    ${(activeButton === d.activityName) && 'bg-[#341600] text-neutral-50'}
                  `}
                  onClick={() => handleActivity(event)}
                >
                  {d.activityName}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 grid-cols-7">
            {activity.grid.map(item => (
              <EventCard 
                key={item.id}
                className={item.span}
                type={item.type}
                src={item.src}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </>
    )
}
