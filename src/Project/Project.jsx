import React from 'react'
import './project.css'

const Project = () => {
    const projects = [
        {
            title: 'CareConnect',
            subtitle: 'On-Demand Care Platform',
            year: '2026',
            tech: ['Docker', 'Jenkins', 'AWS EC2', 'React (Vite)', 'Express.js'],
            description:
                'A care-services web platform with the React frontend and Express backend containerized in Docker for consistent dev/prod environments. Provisioned on an AWS EC2 instance (security groups, IAM roles, Elastic IP) on a custom domain, with a Jenkins CI/CD pipeline that builds Docker images and redeploys on every GitHub push — zero manual steps.',
            link: 'https://github.com/Athiganesh29'
        },
        {
            title: 'FUNNOVA',
            subtitle: 'Digital Learning Platform',
            year: '2026',
            tech: ['Docker', 'Jenkins', 'AWS EC2', 'AWS RDS', 'React', 'Node.js'],
            description:
                'A child-friendly learning platform for Grade 4–5 Maths & Science with role-based JWT auth, interactive quizzes and live progress tracking. Frontend and backend containerized with Docker and deployed on AWS EC2 connected to a managed AWS RDS (PostgreSQL) database, with a Jenkins CI/CD pipeline automating builds and releases from GitHub.',
            link: 'https://github.com/Athiganesh29'
        },
        {
            title: 'Chat Website',
            subtitle: 'Real-Time Messaging App',
            year: '2025',
            tech: ['React', 'WebSocket', 'Socket.io', 'Express.js'],
            description:
                'A real-time messaging application built with React, WebSocket and Express.js for seamless internal communication. Messages send and sync instantly across all connected clients with low-latency transfer and no page reloads, wrapped in a responsive, user-friendly interface.',
            link: 'https://github.com/Athiganesh29/googlechatclone'
        },
        {
            title: 'ZVENT',
            subtitle: 'Event Management System',
            year: '2025',
            tech: ['React', 'Node.js', 'Express.js'],
            description:
                'A full-stack event and registration management system that replaces manual coordination with real-time tracking and centralized admin control. Users register, log in and manage events while admins create and manage announcements and publications, with secure data handling and live updates.',
            link: 'https://github.com/Athiganesh29/student-event-management-v1'
        }
    ]

    return (
        <div id="project-section" className='section-card projects-card scroll-fade-in'>
            <h6 className="scroll-slide-left">My Work</h6>
            <h4 className="scroll-slide-right">Featured Projects</h4>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <article className="project-card scroll-fade-in" key={index}>
                        <div className="project-card-top">
                            <span className="project-year">{project.year}</span>
                            <button
                                className="project-link"
                                onClick={() => window.open(project.link, '_blank')}
                                title="View on GitHub"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </button>
                        </div>
                        <h5 className="project-title">{project.title}</h5>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span className="tech-tag" key={i}>{t}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default Project
