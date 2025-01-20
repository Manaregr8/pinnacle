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
                            <h1 className={`text-3xl font-custom ${styles.logoText}`}>Pinnacle Study</h1> {/* Apply custom font to h1 while keeping other classes */}
                        </div>
                        <div className={styles.linksContainer}>
                            <Link 
                                className={`${styles.hoverLink} ${activeLink === 'home' ? styles.active : ''} font-custom`} 
                                href="/" 
                                onClick={handleActive} 
                                data-link="home"
                            >
                                Home
                            </Link>
                            <div className={styles.mainRoutes}>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'study' ? styles.active : ''} font-custom`} 
                                    href="/study" 
                                    onClick={handleActive} 
                                    data-link="study"
                                >
                                    Study
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'work' ? styles.active : ''} font-custom`} 
                                    href="/work" 
                                    onClick={handleActive} 
                                    data-link="work"
                                >
                                    Work
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'visa' ? styles.active : ''} font-custom`} 
                                    href="/visa" 
                                    onClick={handleActive} 
                                    data-link="visa"
                                >
                                    Visa
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'migrate' ? styles.active : ''} font-custom`} 
                                    href="/migrate" 
                                    onClick={handleActive} 
                                    data-link="migrate"
                                >
                                    Migrate
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'coaching' ? styles.active : ''} font-custom`} 
                                    href="/coaching" 
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
                                    <p className={`text-xl font-custom ${styles.menuHeading}`}>Pinnacle Study</p> {/* Apply custom font to menu header */}
                                    <button className={styles.closeButton} onClick={handleToggle}>
                                        <img src="/icons/close.png" alt="Close Menu" />
                                    </button>
                                </div>
                                <p className={`font-custom ${styles.menuPages}`}>Pages</p> {/* Apply custom font to menu section */}
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'home' ? styles.active : ''} font-custom`} 
                                    href="/" 
                                    onClick={handleActive} 
                                    data-link="home"
                                >
                                    Home
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'about' ? styles.active : ''} font-custom`} 
                                    href="/about" 
                                    onClick={handleActive} 
                                    data-link="about"
                                >
                                    About Us
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'contact' ? styles.active : ''} font-custom`} 
                                    href="/contact" 
                                    onClick={handleActive} 
                                    data-link="contact"
                                >
                                    Contact Us
                                </Link>
                                <p className={`font-custom ${styles.menuServices}`}>Services</p> {/* Apply custom font to services section */}
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'work' ? styles.active : ''} font-custom`} 
                                    href="/work" 
                                    onClick={handleActive} 
                                    data-link="work"
                                >
                                    Work
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'visa' ? styles.active : ''} font-custom`} 
                                    href="/visa" 
                                    onClick={handleActive} 
                                    data-link="visa"
                                >
                                    Visa
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'migrate' ? styles.active : ''} font-custom`} 
                                    href="/migrate" 
                                    onClick={handleActive} 
                                    data-link="migrate"
                                >
                                    Migrate
                                </Link>
                                <Link 
                                    className={`${styles.hoverLink} ${activeLink === 'coaching' ? styles.active : ''} font-custom`} 
                                    href="/coaching" 
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
