import React from 'react'
import hero_section from "../../assets/hero section background.jpg";
import { Navigate, useNavigate } from 'react-router-dom';
import "./PageHeader.css"

function PageHeader({title}) {
    const navigate = useNavigate();
    return (
        <>
            <div className="shop-hero">
                <img
                    src={hero_section}
                    alt="Hero"
                    className="hero-bg"
                />
                <div className="hero-content">
                    <p>{title}</p>
                    <div className='path'>
                        <span className='home' onClick={()=> navigate("/home")}>Home &gt;</span>
                        <span className='shop' >&nbsp;{title}</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageHeader