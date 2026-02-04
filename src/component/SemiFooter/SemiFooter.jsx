import React from 'react'
import { FaShieldAlt, FaTruck, FaHeadset } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import { MdOutlineLocalShipping } from "react-icons/md";
import './SemiFooter.css'


function SemiFooter() {
    return (
        <>
            <div className="feature-section">
                <div className="feature-item">
                    <GoTrophy className="feature-icon" />
                    <div className="feature-text">
                        <h4>High Quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>

                <div className="feature-item">
                    <FaShieldAlt className="feature-icon" />
                    <div className="feature-text">
                        <h4>Warranty Protection</h4>
                        <p>Over 2 years</p>
                    </div>
                </div>

                <div className="feature-item">
                    <MdOutlineLocalShipping className="feature-icon" />
                    <div className="feature-text">
                        <h4>Free Shipping</h4>
                        <p>Order over $150</p>
                    </div>
                </div>

                <div className="feature-item">
                    <FaHeadset className="feature-icon" />
                    <div className="feature-text">
                        <h4>24 / 7 Support</h4>
                        <p>Dedicated support</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SemiFooter