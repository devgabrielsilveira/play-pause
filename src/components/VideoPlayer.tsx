import { useEffect, useRef } from "react"

type Props = {
  src: string
  isPlaying: boolean
  className?: string
}

export const VideoPlayer = ({ src, isPlaying, className}: Props) => {
  const videoTag = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if(isPlaying) {
      videoTag.current?.play()
    } else {
      videoTag.current?.pause()
    }
  }, [isPlaying])
  
  return (

    <video ref={videoTag} src={src} loop playsInline className={className}/>
  )
}