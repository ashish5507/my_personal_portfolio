import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
    const dotRef = useRef(null)
    const glowRef = useRef(null)
    const spotlightRef = useRef(null)
    const mousePos = useRef({ x: 0, y: 0 })
    const glowPos = useRef({ x: 0, y: 0 })
    const trail = useRef([])

    useEffect(() => {
        if (window.matchMedia('(max-width: 768px)').matches) return
        if ('ontouchstart' in window) return

        const dot = dotRef.current
        const glow = glowRef.current
        const spotlight = spotlightRef.current

        // Create trail elements
        const trailCount = 6
        const trailEls = []
        for (let i = 0; i < trailCount; i++) {
            const el = document.createElement('div')
            el.className = 'cursor-trail'
            el.style.opacity = (1 - i / trailCount) * 0.4
            el.style.width = `${4 - i * 0.4}px`
            el.style.height = `${4 - i * 0.4}px`
            document.body.appendChild(el)
            trailEls.push({ el, x: 0, y: 0 })
        }

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
            if (dot) {
                dot.style.left = `${e.clientX}px`
                dot.style.top = `${e.clientY}px`
            }
            if (spotlight) {
                spotlight.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(212, 165, 116, 0.03), transparent 50%)`
            }
        }

        const handleMouseDown = () => {
            dot?.classList.add('cursor-click')
            glow?.classList.add('cursor-click')
        }

        const handleMouseUp = () => {
            dot?.classList.remove('cursor-click')
            glow?.classList.remove('cursor-click')
        }

        const interactiveSelector = 'a, button, [role="button"], input, textarea, .card, .project-card, .btn'

        const handleMouseEnter = () => {
            dot?.classList.add('cursor-hover')
            glow?.classList.add('cursor-hover')
        }

        const handleMouseLeave = () => {
            dot?.classList.remove('cursor-hover')
            glow?.classList.remove('cursor-hover')
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)

        const addHoverListeners = () => {
            document.querySelectorAll(interactiveSelector).forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter)
                el.addEventListener('mouseleave', handleMouseLeave)
            })
        }

        addHoverListeners()
        const observer = new MutationObserver(addHoverListeners)
        observer.observe(document.body, { childList: true, subtree: true })

        // Smooth glow + trail animation
        let animFrame
        const animate = () => {
            // Glow follows with smooth lerp
            glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.12
            glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.12
            if (glow) {
                glow.style.left = `${glowPos.current.x}px`
                glow.style.top = `${glowPos.current.y}px`
            }

            // Trail follows with staggered lerp
            let prevX = mousePos.current.x
            let prevY = mousePos.current.y
            for (let i = 0; i < trailEls.length; i++) {
                const t = trailEls[i]
                const speed = 0.2 - i * 0.025
                t.x += (prevX - t.x) * speed
                t.y += (prevY - t.y) * speed
                t.el.style.left = `${t.x}px`
                t.el.style.top = `${t.y}px`
                prevX = t.x
                prevY = t.y
            }

            animFrame = requestAnimationFrame(animate)
        }
        animFrame = requestAnimationFrame(animate)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mousedown', handleMouseDown)
            document.removeEventListener('mouseup', handleMouseUp)
            cancelAnimationFrame(animFrame)
            observer.disconnect()
            trailEls.forEach(t => t.el.remove())
        }
    }, [])

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={glowRef} className="cursor-glow" />
            <div ref={spotlightRef} className="cursor-spotlight" />
        </>
    )
}
