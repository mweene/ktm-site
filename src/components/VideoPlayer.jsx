'use client';

import '@videojs/react/video/skin.css'
import { createPlayer, videoFeatures } from '@videojs/react'
import { VideoSkin, Video } from '@videojs/react/video'

const Player = createPlayer({ features: videoFeatures })

export const VideoPlayer = ({src}) => {
  const videoOptions = {
    autoPlay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: `${src}`,
      type: 'video/mp4'
    }]
  }
  return (
    <Player.Provider>
      <VideoSkin>
        <Video src={src} playsInline options={videoOptions}/>
      </VideoSkin>
    </Player.Provider>
  )
}
