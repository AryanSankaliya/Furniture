import React from 'react'
import dinign from '../../assets/dinign.png'
import living from "../../assets/living.png";
import badroom from "../../assets/badroom.png";
import "./BrowseRange.css"

function BrowseRange() {
  return (
    <div className="browserange-container">
      <h2>Browse The Range</h2>
      <p>
        Discover beautiful furniture and home decor designed to make every
        space feel cozy and stylish.
      </p>

      <div className="browserange-cards">
        <div className="browserange-item">
          <img src={dinign} alt="Dining" />
          <h3>Dining</h3>
        </div>

        <div className="browserange-item">
          <img src={living} alt="Living" />
          <h3>Living</h3>
        </div>

        <div className="browserange-item">
          <img src={badroom} alt="Bedroom" />
          <h3>Bedroom</h3>
        </div>
      </div>
    </div>

  )
}

export default BrowseRange