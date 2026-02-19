import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavClick = (e, href) => {
        // handle anchor hash links: scroll if on home, otherwise navigate home then scroll
        if (href && href.startsWith('#')) {
            e.preventDefault();
            if (location.pathname === '/') {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                closeMenu();
            } else {
                navigate('/');
                // wait a tick for route change/render then scroll
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                closeMenu();
            }
            return;
        }

        closeMenu();
    };

    const handleCoursesClick = (e) => {
        // On small screens, clicking Courses should navigate to courses section directly
        if (window.innerWidth <= 768) {
            handleNavClick(e, '#courses');
        } else {
            // on desktop keep dropdown behavior
            e.preventDefault();
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="./img/MMTI logo.jpg" alt="MMTI Logo" className="logo-img" />
                    <img src="./img/DNVLogo.jpg" alt="MMTI Logo" className="logo-img" />
                    <span className="logo-text">MMTI</span>
                    
                    
                </div>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#courses" className="nav-link" onClick={(e) => handleCoursesClick(e)}>Courses ▼</a>
                        <ul className="dropdown-menu">
                            <li><a href="#courses" className="dropdown-link" onClick={(e) => handleNavClick(e, '#courses')}>Modular Courses</a></li>
                            <li><a href="#courses" className="dropdown-link" onClick={(e) => handleNavClick(e, '#courses')}>Package Courses</a></li>
                            <li><a href="#courses" className="dropdown-link" onClick={(e) => handleNavClick(e, '#courses')}>Refresher's Courses</a></li>
                            <li><a href="#courses" className="dropdown-link" onClick={(e) => handleNavClick(e, '#courses')}>Competency Courses</a></li>
                            <li><a href="#courses" className="dropdown-link" onClick={(e) => handleNavClick(e, '#courses')}>Simulator Courses</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#faculty" className="nav-link" onClick={(e) => handleNavClick(e, '#faculty')}>Faculty</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link" onClick={closeMenu}>Photo Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#book" className="nav-link nav-cta" onClick={(e) => handleNavClick(e, '#book')}>Book Now</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}