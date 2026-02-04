import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./InspirationCarousel.css";
import { useNavigate } from 'react-router-dom';

function InspirationCarousel({ products }) {
    const navigate = useNavigate();
    const swiperRef = useRef(null);
    const limitedProducts = products.slice(0, 8);

    return (
        <div className="insp-section">

            {/* Left Side */}
            <div className="insp-left">
                <h2 className="insp-title">50+ Beautiful Rooms Inspiration</h2>
                <p className="insp-desc">
                    Our designer already made a lot of beautiful prototypes of rooms that inspire you.
                </p>
                <button className="insp-btn" onClick={() => navigate("/shop")}>
                    Explore More
                </button>
            </div>

            {/* Right Side Swiper */}
            <div className="insp-right">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={products.length > 1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {limitedProducts.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="insp-slide">

                                {/* Main Image */}
                                <div className="insp-main-img">
                                    <img
                                        src={item.images?.[0]}
                                        alt={item.title}
                                    />

                                    <div className="insp-overlay">
                                        <p>
                                            {String(index + 1).padStart(2, "0")} — {item.category}
                                        </p>
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>

                                {/* Next Image */}
                                <div className="insp-next-img">
                                    <img
                                        src={
                                            limitedProducts[(index + 1) % limitedProducts.length]?.images?.[0] ??
                                            limitedProducts[(index + 1) % limitedProducts.length]?.thumbnail ??
                                            item.images?.[0]
                                        }
                                        alt="Next product"
                                    />
                                </div>

                                {/* Manual Next Arrow */}
                                <div className="insp-right-arrow">
                                    <button
                                        className="insp-next-btn"
                                        onClick={() => swiperRef.current?.slideNext()}
                                    >
                                        &gt;
                                    </button>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}

export default InspirationCarousel;
