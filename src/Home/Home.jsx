import { useState, useEffect } from 'react'
import './home.css'
import untitle from '../assets/photo.png'
import logo from '../assets/logo.png'

function Home() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    // Social media links - replace with your actual links
    const socialLinks = {
        linkedin: 'https://www.linkedin.com/in/adhi-ganesh/',
        whatsapp: 'https://wa.me/9361201465',
        instagram: 'https://instagram.com/_adhiiiiiiiiiiii.__',
        github: 'https://github.com/Athiganesh29'
    }

    const handleSocialClick = (platform) => {
        window.open(socialLinks[platform], '_blank')
    }

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
        document.body.classList.toggle('dark-theme')
    }

    // Scroll animation functionality
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    // Optional: remove class when scrolling back up
                    // entry.target.classList.remove('visible')
                }
            })
        }, observerOptions)

        // Observe all elements with scroll animation classes
        const animatedElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in')
        animatedElements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className={`portfolio-container ${isDarkTheme ? 'dark-theme' : ''}`}>
            {/* Theme Toggle Button */}
            <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                {isDarkTheme ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
                    </svg>
                )}
            </button>

            {/* Left Sidebar Navigation */}
            <div className="sidebar">
                <div className="profile-section">
                    <div className="profile-image">
                        <img
                            src={logo}
                            alt="ATHI GANESH"
                            className="profile-pic"
                        />
                    </div>
                    <h2 className="profile-name">ATHI GANESH</h2>
                    <p className="profile-title">
                        <span className="highlight">Final year student</span> Chennai
                    </p>
                </div>

                <nav className="navigation">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                })
                            }} className="menu-link">HOME</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={() => {
                                const aboutSection = document.getElementById('about-section')
                                if (aboutSection) {
                                    aboutSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }
                            }} className="menu-link">ABOUT</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={() => {
                                const projectSection = document.getElementById('project-section')
                                if (projectSection) {
                                    projectSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }
                            }} className="menu-link">PROJECTS</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={() => {
                                const skillSection = document.getElementById('skill-section')
                                if (skillSection) {
                                    skillSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }
                            }} className="menu-link">SKILLS</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={() => {
                                const educationSection = document.getElementById('education-section')
                                if (educationSection) {
                                    educationSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }
                            }} className="menu-link">EDUCATION</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={() => {
                                const contactSection = document.getElementById('contact-section')
                                if (contactSection) {
                                    contactSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    })
                                }
                            }} className="menu-link">CONTACT</a>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <p className="copyright">
                        © Copyright ©2024 All rights reserved | This template is made with ❤️ by ATHI GANESH
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Home Section */}
                <section id="home" className="hero-section scroll-fade-in">
                    <h1 className="hero-title scroll-slide-left">
                        I am<br />
                        Adhi Ganesh
                    </h1>

                    {/* Social Media Icons */}
                    <div className="social-icons scroll-fade-in">
                        <button
                            className="social-icon linkedin scroll-scale-in"
                            onClick={() => handleSocialClick('linkedin')}
                            title="Connect on LinkedIn"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </button>

                        <button
                            className="social-icon whatsapp scroll-scale-in"
                            onClick={() => handleSocialClick('whatsapp')}
                            title="Message on WhatsApp"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                        </button>

                        <button
                            className="social-icon instagram scroll-scale-in"
                            onClick={() => handleSocialClick('instagram')}
                            title="Follow on Instagram"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </button>

                        <button
                            className="social-icon github scroll-scale-in"
                            onClick={() => handleSocialClick('github')}
                            title="Follow on Github"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>

                        </button>
                    </div>
                </section>


            </div>

            {/* Hero Image - Right Most Side */}
            <div className="hero-image-right">
                <img
                    src={untitle}
                    alt="Hero Background"
                    className="background-image"
                />
            </div>
        </div>

    )
}

export default Home
