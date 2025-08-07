import React from 'react'
import './skills.css'
import skillsData from '../assets/skills.json'

// Import all skill images
import htmlImg from '../assets/html1.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react.png'
import javaImg from '../assets/java.png'
import phytonImg from '../assets/phyton.png'
import cssImg from '../assets/css.png'
import githubImg from '../assets/GitHub.jpg'
import cStickerImg from '../assets/C Sticker.jpeg.png'

const Sklls = () => {

    const imageMap = {
        'html1.png': htmlImg,
        'js.png': jsImg,
        'react.png': reactImg,
        'java.png': javaImg,
        'phyton.png': phytonImg,
        'css.png': cssImg,
        'GitHub.jpg': githubImg,
        'C Sticker.jpeg.png': cStickerImg
    }

    // Map skills data with actual image imports
    const skillImages = skillsData.skills.map(skill => ({
        ...skill,
        image: imageMap[skill.image] || skill.image
    }))

    return (
        <>
            <div id="skill-section" className='about-container scroll-fade-in'>
                <h6 className="scroll-slide-left">My Skills</h6>
                <h4 className="scroll-slide-right">Tools and Technologies</h4>
                <div className="skills-content">
                    {skillImages.map((skill) => (
                        <div key={skill.id} className="skill-flip-card scroll-fade-in">
                            <div className="skill-flip-card-inner">
                                {/* Front of card - Skill Image */}
                                <div className="skill-flip-card-front">
                                    <img src={skill.image} alt={skill.name} className="skill-image" />
                                    <span className="skill-label">{skill.name}</span>
                                </div>
                                
                                {/* Back of card - Percentage */}
                                <div className="skill-flip-card-back">
                                    <div className="percentage-container">
                                        <div className="percentage-circle">
                                            <span className="percentage-number">{skill.percentage}%</span>
                                        </div>
                                        <span className="skill-name-back">{skill.name}</span>
                                        <span className="learning-text">Learning Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sklls