import React from 'react'
import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            role: 'AWS Cloud Intern',
            company: 'KnackForge Soft Solutions Pvt. Ltd.',
            type: 'Hybrid · Chennai, India',
            period: 'Aug 2025 – Sep 2025',
            points: [
                'Launched and configured AWS EC2 instances, managed access policies with IAM, and handled application assets in S3 buckets.',
                'Deployed and maintained a real-time chat application (React.js, Node.js, Socket.io) on cloud infrastructure, configuring security groups and monitoring instance health.',
                'Collaborated using Git/GitHub workflows — branching, pull requests and code reviews — following CI/CD practices for automated, repeatable deployments.'
            ]
        }
    ]

    return (
        <div id="experience-section" className='section-card experience-card scroll-fade-in'>
            <h6 className="scroll-slide-left">Where I've Worked</h6>
            <h4 className="scroll-slide-right">Professional Experience</h4>

            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div className="experience-item scroll-fade-in" key={index}>
                        <div className="experience-marker" />
                        <div className="experience-body">
                            <div className="experience-head">
                                <h5 className="experience-role">{exp.role}</h5>
                                <span className="experience-period">{exp.period}</span>
                            </div>
                            <p className="experience-company">
                                {exp.company} <span className="experience-type">· {exp.type}</span>
                            </p>
                            <ul className="experience-points">
                                {exp.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
