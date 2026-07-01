import { useEffect, useRef } from 'react'

interface Trail {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  size: number
}

export function useShootingCursor(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const frameId = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    const particles: Trail[] = []
    const MAX = 20
    let mx = -100
    let my = -100

    const cvs = canvas
    function resize() {
      w = cvs.width = window.innerWidth
      h = cvs.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function onMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
      for (let i = 0; i < 3; i++) {
        particles.push({
          x: mx + (Math.random() - 0.5) * 6,
          y: my + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 1,
          size: Math.random() * 4 + 2,
        })
      }
      if (particles.length > MAX) particles.splice(0, particles.length - MAX)
    }
    window.addEventListener('mousemove', onMove)

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.02
        p.life -= 0.025
        if (p.life <= 0) { particles.splice(i, 1); continue }
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(180, 140, 255, ${p.life * 0.8})`
        ctx!.fill()
        ctx!.shadowBlur = 10
        ctx!.shadowColor = `rgba(180, 140, 255, ${p.life * 0.5})`
      }
      frameId.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frameId.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [canvasRef])
}
