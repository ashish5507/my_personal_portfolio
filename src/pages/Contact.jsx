import { useState } from 'react'
import { Mail, Linkedin, Instagram, Github, Send, MapPin, ArrowUpRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import './Contact.css'

const contactMethods = [
    {
        icon: Mail,
        label: 'Email',
        value: 'ashishjoshirj57@gmail.com',
        href: 'mailto:ashishjoshirj57@gmail.com',
        color: '#4f8fff',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'ashishjoshi540',
        href: 'https://www.linkedin.com/in/ashishjoshi540',
        color: '#0a66c2',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'ashish5507',
        href: 'https://github.com/ashish5507',
        color: '#f0f0f0',
    },
    {
        icon: Instagram,
        label: 'Instagram',
        value: '@miselfashish',
        href: 'https://www.instagram.com/miselfashish',
        color: '#e4405f',
    },
]

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:ashishjoshirj57@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
        window.open(mailtoLink, '_blank')
    }

    return (
        <div className="contact-page">
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">Contact</div>
                            <h1 className="section-title">
                                Let's work <span className="gradient-text">together</span>
                            </h1>
                            <p className="section-subtitle">
                                Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="contact-grid">
                        {/* Contact Form */}
                        <AnimatedSection delay={100}>
                            <form className="contact-form card" onSubmit={handleSubmit}>
                                <h3 className="form-title">Send a Message</h3>

                                <div className="form-group">
                                    <label htmlFor="contact-name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        className="form-input"
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-message" className="form-label">Message</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        className="form-input form-textarea"
                                        placeholder="Tell me about your project or just say hello..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary form-submit-btn">
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </form>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <AnimatedSection delay={200}>
                                <div className="contact-text-card card">
                                    <div className="contact-location">
                                        <MapPin size={20} />
                                        <div>
                                            <h3>Based in</h3>
                                            <p>New Delhi, India</p>
                                        </div>
                                    </div>
                                    <p className="contact-availability">
                                        Currently a 2nd year B.Tech student at NSUT. <br />
                                        <strong>Open to internship opportunities.</strong>
                                    </p>
                                </div>
                            </AnimatedSection>

                            <div className="contact-methods">
                                {contactMethods.map(({ icon: Icon, label, value, href, color }, i) => (
                                    <AnimatedSection key={label} delay={300 + i * 80}>
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="contact-method card" style={{ '--method-color': color }}>
                                            <div className="method-icon" style={{ background: `${color}15`, color }}>
                                                <Icon size={20} />
                                            </div>
                                            <div className="method-info">
                                                <span className="method-label">{label}</span>
                                                <span className="method-value">{value}</span>
                                            </div>
                                            <ArrowUpRight size={16} className="method-arrow" />
                                        </a>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
