import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './ProductDetail.css';
import { CartContext } from '../CartContext/CartProvider';

function ProductDetail({ product }) {
    const [mainImg, setMainImg] = useState(product.images[0]);
    const navigate = useNavigate();
    useEffect(() => {
        setMainImg(product.images[0]);
    }, [product]);

    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(1);

    const reviews = useMemo(() => {
        const num = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
        return `${Math.floor(num / 1000)}k`;
    }, [product]);


    return (
        <>
            <div className="pd-container">

                {/* LEFT SIDE */}
                <div className="pd-left">
                    <div className="pd-gallery">
                        {product.images.map((img, index) => (
                            <img
                                src={img}
                                key={index}
                                alt={`thumb-${index}`}
                                onClick={() => setMainImg(img)}
                            />
                        ))}
                    </div>

                    <div className="pd-main-img">
                        <img src={mainImg} alt={product.title} />
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="pd-right">
                    <div className="pd-info">

                        <h2 className="pd-title">{product.title}</h2>
                        <p className="pd-price">Rs. {product.price.toLocaleString()}</p>

                        {/* RATING */}
                        <div className="pd-review">
                            <span className="pd-stars">
                                {Array.from({ length: 5 }, (_, i) => {
                                    const rating = product.rating;
                                    if (i + 1 <= rating) return <FaStar key={i} color="#ffb400" />;
                                    if (i + 0.5 <= rating) return <FaStarHalfAlt key={i} color="#ffb400" />;
                                    return <FaRegStar key={i} color="#ccc" />;
                                })}
                            </span>

                            <span className="pd-review-count">
                                {reviews}
                            </span>
                        </div>

                        <p className="pd-desc">{product.small_desc}</p>

                        {/* SIZE */}
                        <div className="pd-size-sec">
                            <p className="pd-label">Size</p>
                            <div className="pd-sizes">
                                <button className="pd-size-btn">L</button>
                                <button className="pd-size-btn">XL</button>
                                <button className="pd-size-btn">XS</button>
                            </div>
                        </div>

                        {/* COLOR */}
                        <div className="pd-color-sec">
                            <p className="pd-label">Color</p>
                            <div className="pd-colors">
                                <span className="pd-color pd-purple"></span>
                                <span className="pd-color pd-black"></span>
                                <span className="pd-color pd-gold"></span>
                            </div>
                        </div>

                        {/* ADD TO CART */}
                        <div className="pd-cart-row">
                            <div className="pd-qty-box">
                                <button className='pd-minus' onClick={() => setQty(prev => (prev > 1  ? prev - 1 : 1))}>-</button>
                                <span>{qty}</span>
                                <button className='pd-plus' onClick={() => setQty(prev => (prev < 5 ? prev + 1 : 5))}>+</button>
                            </div>
                            <button className="pd-add-cart" onClick={() => {
                                addToCart(product, qty);
                                navigate("/cart");
                            }} >Add To Cart</button>
                        </div>

                        {/* META */}
                        <div className="pd-meta">

                            <div className="pd-meta-row">
                                <span className="pd-meta-label">SKU</span>
                                <span className="pd-meta-sep">:</span>
                                <span className="pd-meta-value">SS519</span>
                            </div>

                            <div className="pd-meta-row">
                                <span className="pd-meta-label">Category</span>
                                <span className="pd-meta-sep">:</span>
                                <span className="pd-meta-value">{product.category}</span>
                            </div>

                            <div className="pd-meta-row">
                                <span className="pd-meta-label">Tags</span>
                                <span className="pd-meta-sep">:</span>
                                <span className="pd-meta-value">Sofa, Chair, Home, Shop</span>
                            </div>

                            <div className="pd-meta-row">
                                <span className="pd-meta-label">Share</span>
                                <span className="pd-meta-sep">:</span>

                                <div className="pd-socials">
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                    <a href="#"><FaTwitter /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductDetail;
