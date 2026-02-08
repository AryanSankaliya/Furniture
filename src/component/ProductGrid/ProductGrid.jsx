import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CartContext, CartProvider } from "../CartContext/CartProvider";
import "./ProductGrid.css"
import Toast from "../Toast/Toast"
import empty_wish from '../../assets/no_result.jpg'
import { useSearch } from '../../context/SearchContext';



function ProductGrid({ products = [], showHeading = true, showButton = true, pagination = false, itemsPerPage = 15 }) {

    const navigate = useNavigate();

    const [visibleCount, setVisibleCount] = useState(10);
    const { addToCart } = useContext(CartContext);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const visibleProducts = pagination
        ? products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : products.slice(0, visibleCount);

    const [showMsg, setShowMsg] = useState(false);
    const [msgText, setMsgText] = useState("");
    const [msgType, setMsgType] = useState("success");

    const { likedItems, toggleLike } = useContext(CartContext)

    const [showWishlistMsg, setShowWishlistMsg] = useState(false);
    const [wishlistMsg, setWishlistMsg] = useState("");

    const handleAddToCart = (e, item, qty = 1) => {
        e.stopPropagation();
        const cartItemAddtocart = {
            id: item.id,
            title: item.title || item.name,
            price: item.price || 0,
            images: item.images && item.images.length > 0 ? item.images : item.img ? [item.img] : [],
            qty: qty
        };


        const result = addToCart(cartItemAddtocart);

        if (result && !result.success) {
            setMsgText(result.message);
            setMsgType("error");
        } else {
            setMsgText(result.message || `${cartItemAddtocart.title} added to cart!`);
            setMsgType("success");
        }
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
    };

    const handleLike = (e, item) => {
        e.stopPropagation();

        const isLiked = likedItems.includes(item.id);
        toggleLike(item.id)

        if (!isLiked) {
            setWishlistMsg(`${item.title || item.name} added to wishlist!`);
            setShowWishlistMsg(true);

            setTimeout(() => setShowWishlistMsg(false), 2000);
        }


    }
    return (
        <>
            {showMsg && <Toast className={msgType === "error" ? "error-msg" : "cart-msg"}>{msgText}</Toast>}
            {showWishlistMsg && <Toast className="wishlist-msg">{wishlistMsg}</Toast>}

            <div className="products" id="product-grid-section">
                {showHeading && <h2 className="product-heading">Our Products</h2>}

                {products.length === 0 ? (
                    <div className="wishlist-empty">
                        <img
                            src={empty_wish}
                            alt="No Results Found"
                            className="empty-img"
                        />
                        {/* <h2>No results found</h2>
                        <p>Try checking your spelling or use different keywords.</p> */}
                    </div>
                ) : (
                    <div className="product-grid">
                        {visibleProducts.map((item) => (
                            <div className="product-card" key={item.id} onClick={() => navigate(`/shop/${item.id}`)}>
                                <div className="img-box">
                                    <img src={item.images && item.images.length > 0 ? item.images[0] : "https://via.placeholder.com/150"}
                                        alt={item.title} />
                                    <span className="discount-badge">
                                        -{Math.round(item.discount)}%
                                    </span>

                                    <div className="overlay">
                                        <button className="add-btn" onClick={(e) => { handleAddToCart(e, item) }}>Add to cart</button>
                                        <div className="icon-row">
                                            <div className="icon-item">
                                                <FaShareAlt className="icon" />
                                                <p className="icon-text">Share</p>
                                            </div>
                                            <div
                                                className={`icon-item ${likedItems.includes(item.id) ? "liked" : ""}`}
                                                onClick={(e) => handleLike(e, item)}
                                            >
                                                {likedItems.includes(item.id) ? <FaHeart className="icon" /> : <FaRegHeart className="icon" />}
                                                <p className="icon-text">{likedItems.includes(item.id) ? "Liked" : "Like"}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="brand">{item.title}</p>
                                <p className="name">{item.category}</p>
                                <div className="price-row">
                                    <span className="price">Rp {item.price}</span>
                                    <span className="old-price">
                                        Rp {(item.price * 1.8).toFixed(3)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {!pagination && showButton && visibleCount < products.length && (
                <div className="showmore-btn-container">
                    <button className="showmore-btn" onClick={() => setVisibleCount((prev) => prev + 10)}>
                        Show More
                    </button>
                </div>
            )}

            {pagination && (
                // prev btn 
                <div className="pagination-btn-container">

                    {currentPage > 1 && (
                        <button className="pagination-btn" onClick={() => setCurrentPage(currentPage - 1)}>
                            Prev
                        </button>
                    )

                    }

                    {/* number page  */}
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    {/* next btn  */}
                    {currentPage < totalPages && (
                        <button
                            className="pagination-btn"
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}

                </div>
            )}

        </>
    )
}

export default ProductGrid 