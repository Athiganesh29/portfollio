import React from 'react'
import './project.css'

const Project = () => {
  return (
    < >
  <div id="project-section" className='project-container scroll-fade-in'>
                <h6 className="scroll-slide-left">my project </h6>
                <h4 className="scroll-slide-right">Chat Website</h4>
                <div className="project-content scroll-fade-in">
                    <p className="scroll-slide-left">
                    A real-time messaging application built using React, WebSocket, and Express.js that enables seamless internal communication between users. It allows users to send and receive messages instantly without page reloads. The app ensures low-latency data transfer and real-time message synchronization across all connected clients. The interface is responsive and user-friendly, providing a smooth chatting experience within the system.
                    </p>
                    <button onClick={() => window.open('https://github.com/Athiganesh29/googlechatclone', '_blank')} className='view-project'>
                      View project
                    </button>
                </div>
            </div>  
            <div id="project-section" className='project-container2 scroll-fade-in'>
                <h6 className="scroll-slide-left">my project </h6>
                <h4 className="scroll-slide-right">Zvent </h4>
                <div className="project-content scroll-fade-in">
                    <p className="scroll-slide-left">
                    Manual event and registration management was inefficient, lacked real-time tracking, and offered no centralized control for administrators. To address this, I built ZVENT, a full-stack event management system that streamlines event coordination. It enables users to register, log in, and manage events, while admins can create and manage announcements and publications. The platform ensures data security and real-time updates.
                    </p>
                    <button onClick={() => window.open('https://github.com/Athiganesh29/student-event-management-v1', '_blank')} className='view-project'>
                      View project
                    </button>
                </div>
            </div>  
    </>
  )
}

export default Project