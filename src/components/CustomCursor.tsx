import { useRef } from 'react'
import { useShootingCursor } from '../hooks/useShootingCursor'
import './CustomCursor.css'

function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useShootingCursor(canvasRef)
  return <canvas ref={canvasRef} className="custom-cursor" />
}

export default CustomCursor
