import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import './Education.css'

const NSUT_LOGO = '/images/nsut-logo.png'

const certifications = [
    {
        title: "CS50's Introduction to Databases with SQL",
        issuer: 'Harvard University (edX)',
        date: '2025',
        description: 'Completed 7 problem sets and one final project covering SQL, database design, and data management.',
        link: 'https://cs50.harvard.edu/certificates/3e5c0b7e-e230-40eb-9db3-d8c92c88ba4a',
        color: '#a51c30',
    },
    {
        title: 'GenIgnite 2025 — Top 40',
        issuer: 'Devnovate & CyberCIA Forge',
        date: 'October 2025',
        description: 'National Level Hackathon at Microsoft Office Noida. Demonstrated outstanding skills, creativity, and innovation.',
        link: '/images/Devnovate.jpg',
        color: '#4f8fff',
    },
]

const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Operating Systems',
    'Artificial Intelligence',
    'Mathematics (Linear Algebra, Calculus, Probability)',
    'Machine Learning Fundamentals',
    'Web Development',
]

export default function Education() {
    return (
        <div className="education-page">
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">Education</div>
                            <h1 className="section-title">
                                Academic <span className="gradient-text">Journey</span>
                            </h1>
                            <p className="section-subtitle">
                                My educational background and certifications.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* University */}
                    <AnimatedSection delay={100}>
                        <div className="education-card card">
                            <div className="edu-main">
                                <div className="edu-header">
                                    <div className="edu-logo-container">
                                        <img src={NSUT_LOGO} alt="NSUT Logo" className="edu-logo" />
                                    </div>
                                    <div className="edu-info">
                                        <div className="edu-badge">
                                            <Calendar size={12} />
                                            <span>2024 — Present</span>
                                        </div>
                                        <h2 className="edu-university">Netaji Subhas University of Technology</h2>
                                        <p className="edu-degree">
                                            <GraduationCap size={16} />
                                            Bachelor of Technology (B.Tech)
                                        </p>
                                        <p className="edu-detail">2nd Year · 4th Semester</p>
                                    </div>
                                </div>

                                <div className="edu-gpa-section">
                                    <div className="gpa-display">
                                        <div className="gpa-number">8.60</div>
                                        <div className="gpa-label">CGPA</div>
                                    </div>
                                    <div className="gpa-bar-track">
                                        <div className="gpa-bar-fill" style={{ width: '86%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Coursework */}
                    <AnimatedSection delay={200}>
                        <div className="coursework-section">
                            <h3 className="sub-section-title">
                                <BookOpen size={20} />
                                Relevant Coursework
                            </h3>
                            <div className="coursework-grid">
                                {coursework.map((course, i) => (
                                    <div key={i} className="coursework-item">
                                        <span className="coursework-dot"></span>
                                        {course}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="divider"></div>

                    {/* Certifications */}
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">Certifications & Achievements</div>
                            <h2 className="section-title">Certifications</h2>
                        </div>
                    </AnimatedSection>

                    <div className="certs-grid">
                        {certifications.map((cert, i) => (
                            <AnimatedSection key={i} delay={i * 100}>
                                <div className="cert-card card" style={{ '--cert-color': cert.color }}>
                                    <div className="cert-icon-wrap">
                                        <Award size={24} />
                                    </div>
                                    <div className="cert-content">
                                        <div className="cert-date">{cert.date}</div>
                                        <h3 className="cert-title">{cert.title}</h3>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                        <p className="cert-description">{cert.description}</p>
                                        {cert.link && (
                                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                                View Certificate
                                                <ExternalLink size={12} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
