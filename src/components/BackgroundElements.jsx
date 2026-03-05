import { useEffect, useRef } from 'react'
import './BackgroundElements.css'

const floatingItems = [
    // Equations & math
    { text: 'f(x) = ∫ e^x dx', type: 'equation' },
    { text: 'O(n log n)', type: 'equation' },
    { text: '∇ · E = ρ/ε₀', type: 'equation' },
    { text: 'P(A|B) = P(B|A)·P(A)/P(B)', type: 'equation' },
    { text: 'Σ (1/n²) = π²/6', type: 'equation' },
    { text: 'loss = -Σ y·log(ŷ)', type: 'equation' },
    { text: 'α · β → γ', type: 'equation' },
    { text: 'λx. x + 1', type: 'equation' },
    { text: 'E = mc²', type: 'equation' },
    { text: 'dW = F·ds', type: 'equation' },
    { text: '∂f/∂x = lim Δf/Δx', type: 'equation' },

    // Code snippets
    { text: 'if (dream) { build(); }', type: 'code' },
    { text: 'while(alive) { learn(); }', type: 'code' },
    { text: 'import torch', type: 'code' },
    { text: 'git push origin main', type: 'code' },
    { text: 'model.fit(X, y)', type: 'code' },
    { text: 'npm run deploy', type: 'code' },
    { text: 'SELECT * FROM skills', type: 'code' },
    { text: 'return success;', type: 'code' },
    { text: 'const future = await dream()', type: 'code' },
    { text: 'for i in range(∞):', type: 'code' },
    { text: 'docker build -t portfolio .', type: 'code' },

    // Tech symbols
    { text: '{ }', type: 'symbol' },
    { text: '</>', type: 'symbol' },
    { text: '[ ]', type: 'symbol' },
    { text: '&&', type: 'symbol' },
    { text: '=>', type: 'symbol' },
    { text: ':::', type: 'symbol' },
    { text: '/**/', type: 'symbol' },
    { text: '< / >', type: 'symbol' },
    { text: '#!', type: 'symbol' },
    { text: '01', type: 'binary' },
    { text: '10', type: 'binary' },
    { text: '11', type: 'binary' },
    { text: '00', type: 'binary' },
    { text: '0110', type: 'binary' },
    { text: '1001', type: 'binary' },
]

function seededRandom(i) {
    const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
    return x - Math.floor(x)
}

export default function BackgroundElements() {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        let ticking = false
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY
                    const items = container.querySelectorAll('.bg-float-item')
                    items.forEach((item, i) => {
                        const speed = 0.03 + (i % 5) * 0.015
                        const y = parseFloat(item.dataset.baseY) + scrollY * speed
                        item.style.transform = `translateY(${-y}px) rotate(${item.dataset.rotation}deg)`
                    })
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-elements" ref={containerRef} aria-hidden="true">
            {/* Geometric orbs */}
            <div className="bg-geo bg-geo-1"></div>
            <div className="bg-geo bg-geo-2"></div>
            <div className="bg-geo bg-geo-3"></div>
            <div className="bg-geo bg-geo-4"></div>
            <div className="bg-geo bg-geo-5"></div>

            {/* Extra rings */}
            <div className="bg-geo-ring-1"></div>
            <div className="bg-geo-ring-2"></div>
            <div className="bg-geo-ring-3"></div>

            {/* Cross markers */}
            <span className="bg-cross bg-cross-1">+</span>
            <span className="bg-cross bg-cross-2">+</span>
            <span className="bg-cross bg-cross-3">+</span>

            {/* Decorative lines */}
            <div className="bg-line bg-line-1"></div>
            <div className="bg-line bg-line-2"></div>
            <div className="bg-line bg-line-3"></div>

            {/* Floating text items */}
            {floatingItems.map((item, i) => {
                const left = (seededRandom(i) * 88 + 6)
                const top = (seededRandom(i + 50) * 250 + 5)
                const rotation = (seededRandom(i + 100) * 24 - 12)
                const duration = 18 + seededRandom(i + 200) * 20
                const delay = seededRandom(i + 300) * -15

                return (
                    <span
                        key={i}
                        className={`bg-float-item bg-${item.type}`}
                        data-base-y="0"
                        data-rotation={rotation.toFixed(1)}
                        style={{
                            left: `${left}%`,
                            top: `${top}vh`,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                            transform: `rotate(${rotation}deg)`,
                        }}
                    >
                        {item.text}
                    </span>
                )
            })}

            {/* Dot grid clusters */}
            <svg className="bg-dots bg-dots-1" width="160" height="160" viewBox="0 0 160 160">
                {Array.from({ length: 64 }, (_, i) => (
                    <circle key={i} cx={(i % 8) * 20 + 10} cy={Math.floor(i / 8) * 20 + 10} r="1.8" fill="currentColor" />
                ))}
            </svg>
            <svg className="bg-dots bg-dots-2" width="120" height="120" viewBox="0 0 120 120">
                {Array.from({ length: 36 }, (_, i) => (
                    <circle key={i} cx={(i % 6) * 20 + 10} cy={Math.floor(i / 6) * 20 + 10} r="1.5" fill="currentColor" />
                ))}
            </svg>

            {/* Circuit-like lines */}
            <svg className="bg-circuit bg-circuit-1" width="250" height="250" viewBox="0 0 250 250" fill="none">
                <path d="M0 125 H75 V50 H175 V200 H250" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="75" cy="125" r="4" fill="currentColor" />
                <circle cx="175" cy="50" r="4" fill="currentColor" />
                <circle cx="175" cy="200" r="4" fill="currentColor" />
                <path d="M75 125 V200 H150" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            </svg>
            <svg className="bg-circuit bg-circuit-2" width="200" height="200" viewBox="0 0 200 200" fill="none">
                <path d="M0 100 H65 V30 H130 V170 H200" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="65" cy="100" r="3.5" fill="currentColor" />
                <circle cx="130" cy="30" r="3.5" fill="currentColor" />
                <path d="M65 100 V170 H130" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" />
            </svg>
        </div>
    )
}
