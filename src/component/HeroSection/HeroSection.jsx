import React from 'react'
import hero_section_img from "../../assets/hero section img.jpg";
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-section">
            <img src={hero_section_img} alt="" />
        </div>
    )
}

export default HeroSection;