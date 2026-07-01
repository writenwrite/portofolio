import { useRef } from 'react'
import { useParticleNetwork } from '../hooks/useParticleNetwork'
import './Background.css'

function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useParticleNetwork(canvasRef)
  return <canvas ref={canvasRef} className="bg-canvas" />
}

export default Background
