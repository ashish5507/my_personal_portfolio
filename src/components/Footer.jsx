import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUpRight } from 'lucide-react'
import './Footer.css'

const socialLinks = [
    { icon: Github, href: 'https://github.com/ashish5507', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashishjoshi540', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/miselfashish', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ashishjoshirj57@gmail.com', label: 'Email' },
]

const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-bracket">&lt;</span>
                            <span className="logo-name">AJ</span>
                            <span className="logo-bracket">/&gt;</span>
                        </div>
                        <p className="footer-tagline">
                            Building intelligent systems & solving problems one line at a time.
                        </p>
                        <div className="footer-socials">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label={label}>
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-nav">
                        <h4 className="footer-heading">Quick Links</h4>
                        {quickLinks.map(({ path, label }) => (
                            <NavLink key={path} to={path} className="footer-nav-link">
                                {label}
                                <ArrowUpRight size={12} />
                            </NavLink>
                        ))}
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Get in Touch</h4>
                        <a href="mailto:ashishjoshirj57@gmail.com" className="footer-nav-link">
                            ashishjoshirj57@gmail.com
                        </a>
                        <p className="footer-location">📍 New Delhi, India</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Ashish Joshi. Built with <Heart size={12} className="heart-icon" /> and React.
                    </p>
                </div>
            </div>
        </footer>
    )
}
