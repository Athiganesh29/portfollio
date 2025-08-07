import React from 'react'
import './project.css'

const Project = () => {
  return (
    < >
  <div id="project-section" className='project-container scroll-fade-in'>
                <h6 className="scroll-slide-left">my project </h6>
                <h4 className="scroll-slide-right">Ecommerece website</h4>
                <div className="project-content scroll-fade-in">
                    <p className="scroll-slide-left">
                    Built an interactive React.js platform where users can personalize books by adding
 child’s name, age, and photo.
 Integrated e-commerce features like customization preview, cart, and secure checkout
 for seamless user experience.
                    </p>
                    <button onClick={() => window.open('https://github.com/your-username/your-project', '_blank')} className='view-project'>
                      View project
                    </button>
                </div>
            </div>  
            <div id="project-section" className='project-container2 scroll-fade-in'>
                <h6 className="scroll-slide-left">my project </h6>
                <h4 className="scroll-slide-right">Book My Ticket</h4>
                <div className="project-content scroll-fade-in">
                    <p className="scroll-slide-left">
                    Developed a responsive web application using React.js, enabling users to book movie tickets
 seamlessly.
 Implemented features like seat selection, payment integration, and real-time availability checks
 for a smooth booking experience.
                    </p>
                    <button onClick={() => window.open('https://github.com/your-username/your-project', '_blank')} className='view-project'>
                      View project
                    </button>
                </div>
            </div>  
    </>
  )
}

export default Project