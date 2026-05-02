import { VideoPlayer } from "../components/VideoPlayer"
import { PlayIcon } from "@phosphor-icons/react";

function Jumbotron() {
  return (
    <div className="h-[50dvh] px-20 py-15 text-white bg-[#101c2b] grid">
      <h1 className="capitalize text-[4.5rem] font-semibold leading-none self-end">sermons</h1>
    </div>
  )
}

function SermonCard({title}) {
  return (
    <div className="transition-all duration-500 ease-in-out hover:scale-102">
      <div className="bg-[#e5e6e8] h-65 p-5 rounded-4xl flex place-content-center place-items-center">
        <button className="bg-[#101c2b] text-[#e5e6e8] p-3 rounded-full h-fit">
          <PlayIcon weight="fill"/>
        </button>
      </div>
    </div>
  )
}

export default function Sermons() {
  const sermons = [
    {id: 0, title: 'zero'},
    {id: 1, title: 'one'},
    {id: 2, title: 'two'},
    {id: 3, title: 'three'},
    {id: 4, title: 'four'},
    {id: 5, title: 'five'},
    {id: 6, title: 'six'},
    {id: 7, title: 'seven'},
    {id: 9, title: 'nine'},
    {id: 10, title: 'ten'},
    {id: 11, title: 'eleven'},
    {id: 12, title: 'twelve'},
  ]
	return (
		<section className="text-[#101c2b]">
      <Jumbotron />
      
      <div className="h-[90dvh] mx-5 mt-10">
        <VideoPlayer src=""/>
      </div>
        

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 my-20 mx-5 md:mt-15 md:mx-10">
        {sermons.map(sermon => <SermonCard key={sermon.id} title={sermon.title} />)}
      </div>
		</section>
	)
}

