import React, { useState, useEffect } from 'react';
import navStyle from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setIsScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${navStyle.navbar} navbar  navbar-expand-lg fixed-top ${isScrolled ? '' : 'py-4'}`}>
            <div className="container">
                <NavLink className="navbar-brand fw-bolder fs-2 text-white" to="/">START FRAMEWORK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2 active" : "nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2 "} to="/about">About</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2 active" : "nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2 "} to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2 active" : "nav-link text-uppercase text-white fw-bold mt-3 mt-md-0 px-2 "} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

