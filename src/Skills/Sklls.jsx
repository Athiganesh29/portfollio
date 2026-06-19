import React from 'react'
import './skills.css'
import skillsData from '../assets/skills.json'

const Sklls = () => {
    return (
        <div id="skill-section" className='section-card skills-card scroll-fade-in'>
            <h6 className="scroll-slide-left">My Skills</h6>
            <h4 className="scroll-slide-right">Tools &amp; Technologies</h4>

            <div className="skills-groups">
                {skillsData.categories.map((category) => (
                    <div className="skill-group scroll-fade-in" key={category.name}>
                        <h5 className="skill-group-title">{category.name}</h5>
                        <div className="skills-grid">
                            {category.skills.map((skill) => (
                                <div className="skill-chip" key={skill.name}>
                                    <i className={skill.icon}></i>
                                    <span className="skill-chip-label">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sklls
