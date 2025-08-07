import React from 'react'
import './About.css'
import resumePDF from '../assets/athiganesh (2).pdf'

const About = () => {
    const downloadResume = () => {
        const link = document.createElement('a')
        link.href = resumePDF

        link.download = 'ATHI_GANESH_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <div id="about-section" className='about-container scroll-fade-in'>
                <h6 className="scroll-slide-left">About Me</h6>
                <h4 className="scroll-slide-right">Who Am I</h4>
                <div className="about-content scroll-fade-in">
                    <p className="scroll-slide-left">
                        I am a passionate Frontend Developer with a strong foundation in modern web technologies.
                        I specialize in creating responsive, user-friendly interfaces that deliver exceptional user experiences.
                    </p>
                    <p className="scroll-slide-right">
                        With expertise in React, JavaScript, HTML, and CSS, I bring creative designs to life through
                        clean, efficient code. I'm constantly learning and adapting to new technologies to stay
                        ahead in the ever-evolving world of web development.
                    </p>
                    <button className='download-cv' onClick={downloadResume}>
                        Download CV
                    </button>
                </div>
            </div>
        </>
    )
}

export default About