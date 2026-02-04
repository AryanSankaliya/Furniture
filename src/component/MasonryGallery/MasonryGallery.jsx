import React from 'react';
import Masonry from "react-masonry-css";
import "./MasonryGallery.css";

function MasonryGallery({ products }) {
  return (
    <section className="funiro-section">
      <div className="funiro-header">
        <h4>Share your setup with</h4>
        <h2>#FuniroFurniture</h2>
      </div>

      <Masonry
        breakpointCols={{ default: 4, 1200: 3, 900: 2, 600: 1 }}
        className="funiro-masonry-grid"
        columnClassName="funiro-masonry-column"
      >
        {products.slice(12, 24).map((item) => (
          <div key={item.id} className="funiro-card">
            <img src={item.images[0]} alt={item.title} />
          </div>
        ))}
      </Masonry>
    </section>
  );
}

export default MasonryGallery;
