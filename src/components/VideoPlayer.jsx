import { useState, useRef } from "react"
import playLogo from "../assets/icons/play.svg"
import {Play, Pause} from "lucide-react"

export default function VideoPlayer({src}) {
  const videoRef = useRef(null)
  const [ isPlaying, setIsPlaying ] = useState(false)

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="relative h-full m-h-92">
      <video
        ref={videoRef}
        src={src}
        width="600"
        className={`object-cover h-full w-full rounded-4xl`}
      >
      </video>
      <button onClick={togglePlayPause} className="absolute bottom-0 right-0 m-10 bg-neutral-50 p-2">
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </div>        
  )
}
