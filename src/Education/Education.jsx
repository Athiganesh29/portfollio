import React from 'react'
import './Education.css'

const Education = () => {
    const educationData = [
        {
            details: "BE Electronics & Communication",
            school: "KCG College of Technology",
            board: "Anna University (Affiliated)",
            year: "2026",
            cgpa: "8.4"
        },
        {
            details: "12th Standard (HSSLC)",
            school: "P.L.W.A Higher Secondary School",
            board: "TN State board",
            year: "2022",
            cgpa: "83%"
        },
        {
            details: "10th Standard (SSLC)",
            school: "P.L.W.A Higher Secondary School",
            board: "TN State board",
            year: "2020",
            cgpa: "91%"
        }
    ]

    return (
        <>
            <div id="education-section" className='about-container scroll-fade-in'>
                <h6 className="scroll-slide-left">My Education</h6>
                <h4 className="scroll-slide-right">Academic Journey</h4>
                
                <div className="education-content">
                    <div className="education-table-container">
                        <table className="education-table">
                            <thead>
                                <tr>
                                    <th>Details</th>
                                    <th>School/College</th>
                                    <th>Board</th>
                                    <th>Year of Passing</th>
                                    <th>CGPA/Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {educationData.map((education, index) => (
                                    <tr key={index} className="scroll-fade-in">
                                        <td>{education.details}</td>
                                        <td>{education.school}</td>
                                        <td>{education.board}</td>
                                        <td>{education.year}</td>
                                        <td>{education.cgpa}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
