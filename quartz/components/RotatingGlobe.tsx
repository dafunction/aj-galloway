import { h } from "preact"
import { useState, useEffect } from "preact/hooks"

interface RotatingGlobeProps {
  interval?: number
  id?: string
}

const RotatingGlobe = ({ interval = 500, id }: RotatingGlobeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const globeEmojis = ["🌎", "🌍", "🌏"]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % globeEmojis.length)
    }, interval)

    return () => clearInterval(timer)
  }, [interval])

  // This will be the initial render on the server and client
  return (
    <span id={id} data-globe-emoji={JSON.stringify(globeEmojis)}>
      {globeEmojis[0]}
    </span>
  )
}

export default RotatingGlobe
