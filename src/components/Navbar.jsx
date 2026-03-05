import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, FileText } from 'lucide-react'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-inner container">
                <NavLink to="/" className="navbar-logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">AJ</span>
                    <span className="logo-bracket">/&gt;</span>
                </NavLink>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a
                        href="/Ashish_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary nav-resume-btn"
                    >
                        <FileText size={14} />
                        Resume
                    </a>
                </div>

                <button
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    )
}
