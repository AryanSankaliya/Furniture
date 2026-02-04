import React, { useContext } from 'react'
import Header from '../../component/Header/Header'
import PageHeader from '../../component/PageHeader/PageHeader'
import SemiFooter from '../../component/SemiFooter/SemiFooter'
import Footer from '../../component/Footer/Footer'
import ProductGrid from '../../component/ProductGrid/ProductGrid'
import productsData from '../../../public/data/data'
import { CartContext } from '../../component/CartContext/CartProvider'
import './Wishlist.css'
import empty_wish from '../../assets/Empty_Wishlist.png'

import { useSearch } from '../../context/SearchContext';

function Wishlist() {

    const { likedItems } = useContext(CartContext);
    const { searchQuery } = useSearch();

    const wishlistProducts = productsData.filter(product =>
        likedItems.includes(product.id) && (
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <>
            <Header />
            <PageHeader title="Wishlist" />



            {wishlistProducts.length === 0 ? (
                <>
                    <div className='hero-title'>
                        <p>Your wishlist is empty — start adding items you love.</p>
                    </div>
                    <div className="wishlist-empty">
                        <img
                            src={empty_wish}
                            alt="Empty Wishlist"
                            className="empty-img"
                        />
                        <h2>Your wishlist is empty</h2>
                        <p>Start exploring and add items you love.</p>
                    </div>
                </>
            ) : (
                <>
                    <div className='hero-title'>
                        <p>Explore the products you’ve added to your wishlist.</p>
                    </div>
                    <div className="wishlist-content">
                        <ProductGrid
                            products={wishlistProducts}
                            showHeading={false}
                            showButton={false}
                            pagination={true}
                            itemsPerPage={15}
                        />
                    </div>
                </>
            )}

            <SemiFooter />
            <Footer />
        </>
    );
}

export default Wishlist;
