"use client";
import { useState, MouseEventHandler } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import "./font.css";
type LinkType = "home" | "study" | "work" | "visa" | "migrate" | "coaching" | "about" | "contact";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<LinkType>("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleActive: MouseEventHandler<HTMLAnchorElement> = (event) => {
        const link = event.currentTarget.getAttribute('data-link') as LinkType;
        setActiveLink(link);
    };

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className={styles.headerContainer}>
                <div className="container">
                    <div className={styles.flexContainer}>
                        <div className={styles.headlogo}>
                            <img src='/logo/logo.png'/>
                            <h1>Pinnacle Study</h1>
                        </div>
                        <div className={styles.linksContainer}>
                            <Link 
                                className={`${styles.hoverLink} ${activeLink === 'home' ? styles.active : ''}`} 
                                href="/" 
                                onClick={handleActive} 
                                data-link="home"
                            >
                                Home
                            </Link>
                            <div className={styles.mainRoutes}>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'study' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="study"
                                >
                                    Study
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'work' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="work"
                                >
                                    Work
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'visa' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="visa"
                                >
                                    Visa
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'migrate' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="migrate"
                                >
                                    Migrate
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'coaching' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="coaching"
                                >
                                    Coaching
                                </Link>
                            </div>
                        </div>
                        <div className={styles.menu}>
                            <button className={styles.menuButton} onClick={handleToggle}>
                                <img src="/icons/menu.png" alt="Open Menu" />
                            </button>
                            <div 
                                className={styles.linksForMenu} 
                                style={{
                                    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)'
                                }}
                            >
                                <div className={styles.menuHead}>
                                    <p className={styles.menuHeading}>Pinnacle Study</p>
                                    <button className={styles.closeButton} onClick={handleToggle}>
                                        <img src="/icons/close.png" alt="Close Menu" />
                                    </button>
                                </div>
                                <p>Pages</p>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'home' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="home"
                                >
                                    Home
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'about' ? styles.active : ''}`} 
                                    href="/about" 
                                    onClick={handleActive} 
                                    data-link="about"
                                >
                                    About Us
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'contact' ? styles.active : ''}`} 
                                    href="/contact" 
                                    onClick={handleActive} 
                                    data-link="contact"
                                >
                                    Contact Us
                                </Link>
                                <p>Services</p>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'work' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="work"
                                >
                                    Work
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'visa' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="visa"
                                >
                                    Visa
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'migrate' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="migrate"
                                >
                                    Migrate
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'coaching' ? styles.active : ''}`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="coaching"
                                >
                                    Coaching
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
