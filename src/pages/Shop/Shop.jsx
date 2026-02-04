import React from 'react'
import Header from '../../component/Header/Header'
import hero_section from '../../assets/hero section background.jpg'
import './Shop.css'
import ProductGrid from '../../component/ProductGrid/ProductGrid'
import data from '../../../public/data/data.json'
import Footer from '../../component/Footer/Footer'
import SemiFooter from '../../component/SemiFooter/SemiFooter'
import PageHeader from '../../component/PageHeader/PageHeader'



import { useSearch } from '../../context/SearchContext';


function Shop() {
  const { searchQuery } = useSearch();

  const filteredProducts = data.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <PageHeader title="Shop" />

      <div className='hero-title'>
        <p>Discover our latest collection of premium furniture</p>
      </div>

      {/* ProductGrid handles pagination internally */}
      <ProductGrid
        products={filteredProducts}
        showHeading={false}
        showButton={false}
        pagination={true}
        itemsPerPage={15}
      />
      <SemiFooter />


      <Footer />
    </>
  )
}

export default Shop
