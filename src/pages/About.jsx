import AnimatedSection from '../components/AnimatedSection'
import { Code2, Database, Wrench, Brain, Terminal, Globe } from 'lucide-react'
import './About.css'

// Devicon CDN URLs for skill logos
const devicon = (name, variant = 'original') =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

const skillCategories = [
    {
        title: 'Languages',
        icon: Terminal,
        color: 'var(--accent)',
        skills: [
            { name: 'Python', logo: devicon('python') },
            { name: 'C++', logo: devicon('cplusplus') },
            { name: 'JavaScript', logo: devicon('javascript') },
            { name: 'HTML5', logo: devicon('html5') },
            { name: 'CSS3', logo: devicon('css3') },
            { name: 'SQL', logo: devicon('azuresqldatabase') },
        ],
    },
    {
        title: 'Frontend',
        icon: Globe,
        color: 'var(--accent-purple)',
        skills: [
            { name: 'React', logo: devicon('react') },
            { name: 'Next.js', logo: devicon('nextjs') },
            { name: 'Tailwind CSS', logo: devicon('tailwindcss') },
            { name: 'TypeScript', logo: devicon('typescript') },
            { name: 'Webpack', logo: devicon('webpack') },
        ],
    },
    {
        title: 'Backend & DB',
        icon: Database,
        color: 'var(--accent-emerald)',
        skills: [
            { name: 'FastAPI', logo: devicon('fastapi') },
            { name: 'Flask', logo: devicon('flask') },
            { name: 'Node.js', logo: devicon('nodejs') },
            { name: 'MySQL', logo: devicon('mysql') },
            { name: 'SQLite', logo: devicon('sqlite') },
        ],
    },
    {
        title: 'AI / ML',
        icon: Brain,
        color: 'var(--accent-orange)',
        skills: [
            { name: 'PyTorch', logo: devicon('pytorch') },
            { name: 'HuggingFace', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
            { name: 'NumPy', logo: devicon('numpy') },
            { name: 'Pandas', logo: devicon('pandas') },
            { name: 'Jupyter', logo: devicon('jupyter') },
        ],
    },
    {
        title: 'Tools & DevOps',
        icon: Wrench,
        color: 'var(--accent-pink)',
        skills: [
            { name: 'Git', logo: devicon('git') },
            { name: 'Docker', logo: devicon('docker') },
            { name: 'Vercel', logo: devicon('vercel') },
            { name: 'Linux', logo: devicon('linux') },
            { name: 'VS Code', logo: devicon('vscode') },
        ],
    },
    {
        title: 'Competitive',
        icon: Code2,
        color: '#eab308',
        skills: [
            { name: 'LeetCode (160+)', logo: null },
            { name: 'GFG (100+)', logo: null },
            { name: 'Data Structures', logo: null },
            { name: 'Algorithms', logo: null },
            { name: 'Problem Solving', logo: null },
        ],
    },
]

const codingProfiles = [
    {
        platform: 'LeetCode',
        handle: 'comp_decxter',
        stats: '160+ Problems',
        href: 'https://leetcode.com/u/comp_decxter/',
        color: '#ffa116',
    },
    {
        platform: 'GeeksforGeeks',
        handle: 'ashish959',
        stats: '100+ Problems',
        href: 'https://www.geeksforgeeks.org/profile/ashish959',
        color: '#2f8d46',
    },
    {
        platform: 'GitHub',
        handle: 'ashish5507',
        stats: 'Open Source',
        href: 'https://github.com/ashish5507',
        color: '#f0f0f0',
    },
]

export default function About() {
    return (
        <div className="about">
            <section className="section">
                <div className="container">
                    {/* Header */}
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">About Me</div>
                            <h1 className="section-title">
                                Passionate about building things that <span className="gradient-text">matter</span>
                            </h1>
                        </div>
                    </AnimatedSection>

                    {/* Bio */}
                    <AnimatedSection delay={100}>
                        <div className="about-bio">
                            <div className="bio-content">
                                <p className="bio-text">
                                    I'm <strong>Ashish Joshi</strong>, a 2nd year B.Tech student at <strong>Netaji Subhas University of Technology (NSUT)</strong>,
                                    New Delhi. I'm deeply inclined towards <strong>problem solving</strong> and have a genuine passion for building things —
                                    whether it's an AI-powered forensic analysis tool, a semantic segmentation pipeline for autonomous vehicles,
                                    or a deep-sea biodiversity assessment system.
                                </p>
                                <p className="bio-text">
                                    My journey in tech is driven by curiosity and a love for learning. I'm particularly drawn to
                                    <strong> AI/ML</strong> and enjoy exploring how intelligent systems can solve real-world problems.
                                    When I'm not coding, I'm solving competitive programming challenges, learning about new technologies,
                                    or working on projects that truly make me happy.
                                </p>
                                <p className="bio-text accent-text">
                                    I believe in learning by doing — every project I build teaches me something new, and every problem I solve
                                    makes me a better engineer.
                                </p>
                            </div>
                            <div className="bio-quick-facts">
                                <div className="fact">
                                    <span className="fact-label">University</span>
                                    <span className="fact-value">NSUT, Delhi</span>
                                </div>
                                <div className="fact">
                                    <span className="fact-label">Year</span>
                                    <span className="fact-value">2nd Year (4th Sem)</span>
                                </div>
                                <div className="fact">
                                    <span className="fact-label">CGPA</span>
                                    <span className="fact-value highlight">8.60</span>
                                </div>
                                <div className="fact">
                                    <span className="fact-label">Focus</span>
                                    <span className="fact-value">AI/ML · Full-Stack</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="divider"></div>

                    {/* Skills Grid */}
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">Tech Stack</div>
                            <h2 className="section-title">Skills & Technologies</h2>
                            <p className="section-subtitle">Tools and technologies I work with to bring ideas to life.</p>
                        </div>
                    </AnimatedSection>

                    <div className="skills-grid">
                        {skillCategories.map(({ title, icon: Icon, color, skills }, i) => (
                            <AnimatedSection key={title} delay={i * 80}>
                                <div className="skill-category card">
                                    <div className="skill-category-header">
                                        <div className="skill-icon" style={{ background: `${color}15`, color }}>
                                            <Icon size={22} />
                                        </div>
                                        <h3>{title}</h3>
                                    </div>
                                    <div className="skill-tags">
                                        {skills.map((skill) => (
                                            <span key={skill.name} className="skill-tag">
                                                {skill.logo && (
                                                    <img
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        className="skill-logo"
                                                        loading="lazy"
                                                    />
                                                )}
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className="divider"></div>

                    {/* Coding Profiles */}
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">Competitive Programming</div>
                            <h2 className="section-title">Coding Profiles</h2>
                        </div>
                    </AnimatedSection>

                    <div className="profiles-grid">
                        {codingProfiles.map(({ platform, handle, stats, href, color }, i) => (
                            <AnimatedSection key={platform} delay={i * 100}>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="profile-card card">
                                    <div className="profile-indicator" style={{ background: color }}></div>
                                    <div className="profile-info">
                                        <h3 className="profile-platform">{platform}</h3>
                                        <p className="profile-handle">@{handle}</p>
                                    </div>
                                    <div className="profile-stats">
                                        <span className="profile-stat-value">{stats}</span>
                                    </div>
                                </a>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
