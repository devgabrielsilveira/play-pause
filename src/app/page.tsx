'use client'

import '../app/global.css'
import { VideoPlayer } from "@/components/VideoPlayer"
import { useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa";



export default function Page() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="">
      <div className="flex justify-center items-center mt-20 bg-gray-900">
        <VideoPlayer 
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            isPlaying={playing}
            className="h-[300px] w-auto"
        />
      </div>

      <div className="flex flex-col justify-center items-center p-3 mt-10 mb-4">
        <p className="2-xl text-white mb-3 text-lg">
          {playing 
            ? 'O vídeo está rodando' 
            : 'O vídeo está pausado'}
        </p>
        <button className="bg-red-600 text-white rounded-md p-6" onClick={() => setPlaying(!playing)}>
        {playing 
            ? <FaPause />
            :  <FaPlay />
            
        }
        </button>
      </div>
    </div>
  )
}