import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import "./Header.css";
import { FaShoppingCart, FaSearch, FaRegUser, FaRegHeart, FaBars } from "react-icons/fa";
import CartSideBar from '../CartSideBar/CartSideBar';
import { useSearch } from '../../context/SearchContext';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { searchQuery, setSearchQuery } = useSearch();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (isCartOpen) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = 'auto';   // Enable scroll
        }

        return () => {
            document.body.style.overflow = 'auto'; // Cleanup
        };
    }, [isCartOpen]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (location.pathname !== '/shop' && location.pathname !== '/home' && location.pathname.toLowerCase() !== '/wishlist') {
            navigate('/shop');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const element = document.getElementById('product-grid-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    return (
        <div className="header">

            {/* Left Section */}
            {/* Left Section */}
            <div className="header-left">
                <FaBars className="menu-icon" onClick={toggleMenu} />
                <img src={logo} alt="" className="header-logo" />
                <h2 className="header-brand" onClick={() => navigate('/home')}>Furniro</h2>
            </div>

            {/* Middle Section */}
            <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="header-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/shop" className="header-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                <Link to="/about" className="header-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/contact" className="header-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>

            {/* Right Section */}
            <div className="header-icons">

                <div className={`search-bar-container ${isSearchActive ? 'active' : ''}`}>
                    <FaSearch className="search-icon" onClick={() => setIsSearchActive(!isSearchActive)} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown}
                        className="search-input"
                    />
                </div>

                <Link to="/wishlist" className="header-icon">
                    <FaRegHeart />
                </Link>
                <Link
                    to="#"
                    className="header-icon"
                    onClick={() => setIsCartOpen(true)}
                >
                    <FaShoppingCart />
                </Link>
                {isCartOpen && (
                    <>
                        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
                        <CartSideBar
                            isOpen={isCartOpen}
                            onClose={() => setIsCartOpen(false)}
                        />
                    </>
                )}

            </div>

            {/* {isCartOpen && <CartSideBar onClose={() => setIsCartOpen(false)} />} */}
        </div>
    )
}

export default Header;
