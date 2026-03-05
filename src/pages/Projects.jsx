import { Github, ExternalLink, Youtube, ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import './Projects.css'

const projects = [
    {
        id: 1,
        title: 'DesertSeg — Terrain Segmentation',
        tagline: 'Semantic segmentation for off-road autonomy',
        description: 'A semantic segmentation pipeline that classifies every pixel in desert off-road scenes into 10 terrain categories — Trees, Sky, Rocks, Landscape, Flowers, Logs, and more. Trained entirely on synthetic simulation data from Duality AI\'s Falcon platform, proving synthetic environments can train production-quality perception models for autonomous ground vehicles.',
        highlights: [
            'Custom 16-bit mask loader handling Duality Falcon\'s I;16 PNG format',
            'Dataset pipeline optimised for Colab — ~10x faster epoch I/O',
            'Checkpoint-every-epoch to survive T4 disconnects',
            'Flask web app with drag-and-drop inference — under 200ms per image on CPU',
        ],
        metrics: [
            { label: 'mIoU', value: '56.92%' },
            { label: 'Pixel Accuracy', value: '85.35%' },
            { label: 'Sky IoU', value: '97.5%' },
            { label: 'Training Images', value: '2,857' },
        ],
        stack: ['PyTorch', 'SegFormer-B2', 'HuggingFace', 'Flask', 'Google Colab', 'fp16'],
        color: '#4f8fff',
        links: {},
    },
    {
        id: 2,
        title: 'ForensicAI — Digital Forensic Agent',
        tagline: 'AI-powered UFDR investigation tool',
        description: 'A sophisticated AI-powered Digital Forensic Investigation Agent designed to handle UFDR (Universal Forensic Extraction Device Report) files. Bridges the gap between complex forensic data and the needs of Investigating Officers using natural language queries to deliver immediate, actionable insights.',
        highlights: [
            'Natural Language Ingestion — converts human questions into technical queries',
            'Automated report generation with professional formatting',
            'Pattern recognition for crypto addresses, phone numbers, suspicious keywords',
            'Multi-format parser for XML and ZIP forensic exports',
        ],
        metrics: [
            { label: 'Stack', value: 'Full-Stack' },
            { label: 'AI Core', value: 'LLM + FAISS' },
            { label: 'Backend', value: 'FastAPI' },
            { label: 'Frontend', value: 'Next.js' },
        ],
        stack: ['FastAPI', 'Next.js', 'TypeScript', 'FAISS', 'SentenceTransformer', 'SQLite', 'Tailwind CSS'],
        color: '#a855f7',
        links: {
            youtube: 'https://youtu.be/jLuMoxl2rkA?si=lGkRxnBIAZ4lW11V',
        },
    },
    {
        id: 3,
        title: 'DeepSea eDNA — Biodiversity Analysis',
        tagline: 'AI-driven marine species discovery pipeline',
        description: 'An advanced AI-driven pipeline for a hackathon addressing one of the biggest challenges in marine biology: identifying species from environmental DNA when reference databases are incomplete. Uses deep learning and unsupervised learning to discover even novel or undocumented taxa from the deep sea.',
        highlights: [
            'Custom DNA_CNN_Upgraded model for sequence classification',
            'Novel OTU detection using HDBSCAN clustering on unknown sequences',
            'TF-IDF vectorization of raw DNA strings for clustering',
            'Dynamic quantization for lightweight deployment',
        ],
        metrics: [
            { label: 'Model', value: 'CNN' },
            { label: 'Discovery', value: 'HDBSCAN' },
            { label: 'Validation', value: 'BLAST' },
            { label: 'Deploy', value: 'Docker' },
        ],
        stack: ['PyTorch', 'FastAPI', 'HDBSCAN', 'Biopython', 'NCBI BLAST', 'Docker', 'TF-IDF'],
        color: '#22c55e',
        links: {
            youtube: 'https://youtu.be/JJIbn9EPQAE?si=D1orC-gQpIOUgsCO',
        },
    },
]

export default function Projects() {
    return (
        <div className="projects-page">
            <section className="section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <div className="section-label">Portfolio</div>
                            <h1 className="section-title">
                                Featured <span className="gradient-text">Projects</span>
                            </h1>
                            <p className="section-subtitle">
                                From AI-powered forensic tools to deep-sea biodiversity analysis — projects that push the boundaries of what's possible.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="projects-list">
                        {projects.map((project, i) => (
                            <AnimatedSection key={project.id} delay={i * 100}>
                                <article className="project-card" style={{ '--project-color': project.color }}>
                                    <div className="project-accent"></div>

                                    <div className="project-header">
                                        <div className="project-number">0{project.id}</div>
                                        <div>
                                            <h2 className="project-title">{project.title}</h2>
                                            <p className="project-tagline">{project.tagline}</p>
                                        </div>
                                    </div>

                                    <p className="project-description">{project.description}</p>

                                    {/* Highlights */}
                                    <div className="project-highlights">
                                        <h3 className="project-section-title">Key Highlights</h3>
                                        <ul className="highlights-list">
                                            {project.highlights.map((h, idx) => (
                                                <li key={idx}>
                                                    <ChevronRight size={14} />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Metrics */}
                                    <div className="project-metrics">
                                        {project.metrics.map(({ label, value }) => (
                                            <div key={label} className="metric">
                                                <span className="metric-value">{value}</span>
                                                <span className="metric-label">{label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stack & Links */}
                                    <div className="project-footer">
                                        <div className="project-stack">
                                            {project.stack.map((tech) => (
                                                <span key={tech} className="tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="project-links">
                                            {project.links.github && (
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                                    <Github size={18} />
                                                    <span>Code</span>
                                                </a>
                                            )}
                                            {project.links.live && (
                                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                                                    <ExternalLink size={18} />
                                                    <span>Live</span>
                                                </a>
                                            )}
                                            {project.links.youtube && (
                                                <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="project-link youtube-link">
                                                    <Youtube size={18} />
                                                    <span>Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </AnimatedSection>
                        ))}
                    </div>

                    {/* CS50 Final Project */}
                    <AnimatedSection delay={100}>
                        <div className="cs50-callout card">
                            <div className="cs50-content">
                                <div className="section-label">Bonus</div>
                                <h3>CS50 Final Project</h3>
                                <p>Check out the final project I built for Harvard's CS50 Introduction to Databases with SQL.</p>
                            </div>
                            <a href="https://youtu.be/ZWbUa3ZBqTU?si=_FO984W21dPa4Cbb" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <Youtube size={18} />
                                Watch Demo
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
