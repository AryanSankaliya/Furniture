import React, { useEffect, useState } from 'react'
import BrowseRange from '../../component/BrowseRange/BrowseRange'
import Header from '../../component/Header/Header'
import HeroSection from '../../component/HeroSection/HeroSection'
import ProductGrid from '../../component/ProductGrid/ProductGrid'
import Footer from '../../component/Footer/Footer'
import InspirationCarousel from '../../component/InspirationCarousel/InspirationCarousel'
import MasonryGallery from '../../component/MasonryGallery/MasonryGallery'


import { useSearch } from '../../context/SearchContext';

function Home() {
    const [products, setProducts] = useState([]);
    const { searchQuery } = useSearch();

    useEffect(() => {
        fetch("/data/data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />
            <HeroSection />
            <BrowseRange />
            <ProductGrid products={filteredProducts} showButton={true} pagination={false} />
            <InspirationCarousel products={products} />
            <MasonryGallery products={products} />
            <Footer />
        </div>
    )
}

export default Home