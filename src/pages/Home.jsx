import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Instagram, Mail, Code2, Brain, Rocket, FileText, ExternalLink } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import './Home.css'

const stats = [
    { number: '20+', label: 'Projects Built', icon: Rocket },
    { number: '250+', label: 'DSA Problems Solved', icon: Code2 },
    { number: '8.60', label: 'CGPA at NSUT', icon: Brain },
]

const socialLinks = [
    { icon: Github, href: 'https://github.com/ashish5507', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashishjoshi540', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/miselfashish', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ashishjoshirj57@gmail.com', label: 'Email' },
]

export default function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero section">
                <div className="container">
                    <AnimatedSection>
                        <div className="hero-label">
                            <span className="status-dot"></span>
                            Available for Internships
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={100}>
                        <h1 className="hero-title">
                            Hi, I'm <span className="gradient-text">Ashish Joshi</span>
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={200}>
                        <p className="hero-subtitle">
                            B.Tech student at <strong>NSUT</strong> · Problem solver · AI/ML enthusiast.
                            <br />
                            I build intelligent systems that push boundaries and make an impact.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={300}>
                        <div className="hero-actions">
                            <Link to="/projects" className="btn btn-primary">
                                View Projects
                                <ArrowRight size={16} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Get In Touch
                            </Link>
                            <a
                                href="/Ashish_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <FileText size={16} />
                                Resume
                                <ExternalLink size={12} />
                            </a>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={400}>
                        <div className="hero-socials">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={label}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map(({ number, label, icon: Icon }, i) => (
                            <AnimatedSection key={label} delay={i * 100}>
                                <div className="stat-card card">
                                    <div className="stat-icon">
                                        <Icon size={24} />
                                    </div>
                                    <div className="stat-number">{number}</div>
                                    <div className="stat-label">{label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Highlights */}
            <section className="highlights section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">What I Do</div>
                            <h2 className="section-title">
                                Turning complex problems into <span className="gradient-text">elegant solutions</span>
                            </h2>
                        </div>
                    </AnimatedSection>

                    <div className="highlights-grid">
                        <AnimatedSection delay={100}>
                            <div className="highlight-card card">
                                <div className="highlight-icon" style={{ background: 'rgba(212, 165, 116, 0.1)', color: 'var(--accent)' }}>
                                    <Brain size={28} />
                                </div>
                                <h3>AI & Machine Learning</h3>
                                <p>Building intelligent systems from semantic segmentation models to AI-powered forensic agents.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={200}>
                            <div className="highlight-card card">
                                <div className="highlight-icon" style={{ background: 'rgba(155, 142, 196, 0.1)', color: 'var(--accent-lavender)' }}>
                                    <Code2 size={28} />
                                </div>
                                <h3>Full-Stack Development</h3>
                                <p>End-to-end applications with React, Next.js, FastAPI, and modern deployment pipelines.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={300}>
                            <div className="highlight-card card">
                                <div className="highlight-icon" style={{ background: 'rgba(92, 181, 137, 0.1)', color: 'var(--accent-emerald)' }}>
                                    <Rocket size={28} />
                                </div>
                                <h3>Problem Solving</h3>
                                <p>260+ problems across LeetCode & GFG. Competitive programming enthusiast with strong DSA skills.</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    )
}
