import React from 'react'
import './About.css'
import resumePDF from '../assets/Athi_Ganesh_K_Resume_cloud.pdf'

const About = () => {
    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = resumePDF
        link.download = 'Athi_Ganesh_K_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div id="about-section" className='section-card about-card scroll-fade-in'>
            <h6 className="scroll-slide-left">About Me</h6>
            <h4 className="scroll-slide-right">Who Am I</h4>
            <div className="about-content scroll-fade-in">
                <p className="scroll-slide-left">
                    I'm an aspiring <strong>DevOps / Cloud Engineer</strong> and final-year B.E. student with
                    hands-on experience deploying full-stack applications on <strong>AWS EC2</strong> using
                    Docker containers and Jenkins CI/CD pipelines. I enjoy building reliable, automated
                    deployment workflows and managing cloud infrastructure end-to-end.
                </p>
                <p className="scroll-slide-right">
                    My toolkit spans <strong>AWS</strong> (EC2, S3, IAM), Docker, Jenkins, Git/GitHub, Linux
                    and Nginx, alongside full-stack web development with React.js, Node.js and Express.js.
                    I've applied these across an internship and live, production-deployed projects — and I'm
                    eager to contribute to scalable, automated systems from day one.
                </p>

                <div className="about-highlights">
                    <div className="highlight-stat">
                        <span className="stat-value">8.45</span>
                        <span className="stat-label">CGPA</span>
                    </div>
                    <div className="highlight-stat">
                        <span className="stat-value">4+</span>
                        <span className="stat-label">Deployed Projects</span>
                    </div>
                    <div className="highlight-stat">
                        <span className="stat-value">AWS</span>
                        <span className="stat-label">Cloud Intern</span>
                    </div>
                </div>

                <button className='download-cv' onClick={downloadResume}>
                    Download Résumé
                </button>
            </div>
        </div>
    )
}

export default About
