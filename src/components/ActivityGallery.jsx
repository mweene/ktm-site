import { useState } from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

const data = [
  {
    "id": 1,
    "activityName": "Activity One",
    "slug": "activity-one",
    "grid": [
      { "id": "a1-00", "type": "image", "src": "https://picsum.photos/id/220/600/400?grayscale", "span": "col-span-1" },
      { "id": "a1-01", "type": "video", "src": "https://lorem.video/720p_h264_10s", "span": "col-span-3" },
      { "id": "a1-02", "type": "image", "src": "https://picsum.photos/id/221/600/400?grayscale", "span": "col-span-2" },
      { "id": "a1-03", "type": "text",  "content": "Fun", "span": "col-span-1", "bgColor": "bg-blue-500" },
      { "id": "a1-04", "type": "image", "src": "https://picsum.photos/id/222/600/400?grayscale", "span": "col-span-2" },
      { "id": "a1-05", "type": "image", "src": "https://picsum.photos/id/223/600/400?grayscale", "span": "col-span-1" },
      { "id": "a1-06", "type": "images", "src": "https://picsum.photos/id/122/600/400?grayscale", "span": "col-span-4" },
    ]
  },
  {
    "id": 2,
    "activityName": "Activity Two",
    "slug": "activity-two",
    "grid": [
      { "id": "a2-00", "type": "image", "src": "https://picsum.photos/id/320/600/400?grayscale", "span": "col-span-1" },
      { "id": "a2-01", "type": "video", "src": "https://lorem.video/720p_h264_5s", "span": "col-span-3" },
      { "id": "a2-02", "type": "image", "src": "https://picsum.photos/id/321/600/400?grayscale", "span": "col-span-2" },
      { "id": "a2-03", "type": "text",  "content": "Joy", "span": "col-span-1", "bgColor": "bg-green-500" },
      { "id": "a2-04", "type": "image", "src": "https://picsum.photos/id/322/600/400?grayscale", "span": "col-span-2" },
      { "id": "a2-05", "type": "image", "src": "https://picsum.photos/id/323/600/400?grayscale", "span": "col-span-1" },
    ]
  },
  {
    "id": 3,
    "activityName": "Activity Three",
    "slug": "activity-three",
    "grid": [
      { "id": "a3-00", "type": "image", "src": "https://picsum.photos/id/420/600/400?grayscale", "span": "col-span-1" },
      { "id": "a3-01", "type": "video", "src": "https://lorem.video/720p_h264_15s", "span": "col-span-3" },
      { "id": "a3-02", "type": "image", "src": "https://picsum.photos/id/421/600/400?grayscale", "span": "col-span-2" },
      { "id": "a3-03", "type": "text",  "content": "Love", "span": "col-span-1", "bgColor": "bg-red-500" },
      { "id": "a3-04", "type": "image", "src": "https://picsum.photos/id/422/600/400?grayscale", "span": "col-span-2" },
      { "id": "a3-05", "type": "image", "src": "https://picsum.photos/id/423/600/400?grayscale", "span": "col-span-1" },
    ]
  }
];

function EventCard({className, type, src, content}) {
  const [index, setIndex] = useState(0);

  const imagesList = [
    'https://picsum.photos/id/600/600/400?grayscale',
    'https://picsum.photos/id/601/600/400?grayscale',
    'https://picsum.photos/id/602/600/400?grayscale'
  ];

  return (
    <div className={`rounded-4xl overflow-hidden relative h-[21rem] ${className}`}>
      {type === 'image' && (
        <img src={src} alt="some random image" className="w-full h-full object-cover rounded-4xl"/>
      )}

      {type === 'images' && (
        <>
          <img src={imagesList[index]} alt="some image" className="w-full h-full object-cover rounded-4xl" />
          
          <div className="absolute bottom-0 right-0 m-6.5 flex gap-4">
            <button className="rounded-full p-2 bg-neutral-100/90"><ArrowLeft size={20}/></button>
            <button className="rounded-full p-2 bg-neutral-100/90"><ArrowRight size={20}/></button>
          </div>
        </>
      )}

      {type === 'video' && (
        <video src={src} autoPlay loop muted className="w-full h-full object-cover rounded-4xl"/>
      )}

      {type === 'text' && (
        <div className="w-full h-full bg-blue-500 flex place-content-center place-items-center text-white text-9xl font-bold rounded-4xl">
          {content}
        </div>
      )}
    </div>
  )
}

export default function ActivityGallery () {
    return (
      <>
        <div>
          <p className="uppercase">our gallery</p>
          <h2 className="text-5xl font-semibold">
            Get a glimpse into our activities
          </h2>

          <div className="flex gap-4 my-4 mt-6">
            {data.map(d => <p key={d.id}>{d.activityName}</p>)}
          </div>

          <div className="grid gap-4 grid-cols-7">
            {data[0].grid.map(item => (
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
