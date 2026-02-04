import React from "react";
import Header from "../../component/Header/Header";
import PageHeader from "../../component/PageHeader/PageHeader";
import SemiFooter from "../../component/SemiFooter/SemiFooter";
import Footer from "../../component/Footer/Footer";
import about from "../../assets/about us.png"
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <PageHeader title="About Us" />

      <div className="about-container">

        {/* Top Section */}
        <div className="about-top">
          <div className="about-left">
            <h1>About Us</h1>
            <p>
              We are a furniture company passionately creating high-quality,
              timeless pieces that transform houses into homes.
            </p>
          </div>

          <div className="about-right">
            <img
              src={about}
              alt="About"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2005, our company is dedicated to designing furniture 
            that complements modern living. Our artisans use only the finest 
            materials, ensuring durability and comfort in every piece. From 
            ergonomic chairs to cozy sofas, each item is crafted to elevate 
            your space.
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-mission">
          <h2>Our Mission</h2>

          <ul>
            <li>✔ Crafting timeless furniture</li>
            <li>✔ Enhancing living spaces</li>
            <li>✔ Prioritizing quality and sustainability</li>
          </ul>
        </div>
      </div>

      <SemiFooter />
      <Footer />
    </>
  );
}

export default About;
