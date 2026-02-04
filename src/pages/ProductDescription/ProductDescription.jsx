import React, { useEffect, useState } from 'react';
import './ProductDescription.css';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ProductDetail from '../../component/ProductDetail/ProductDetail';
import data from '../../../public/data/data.json'
import ProductGrid from '../../component/ProductGrid/ProductGrid';

import { Navigate, useParams } from 'react-router-dom';

function ProductDescription() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("desc");

    useEffect(() => {
        fetch("/data/data.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setProduct(found);
            })
            .catch((err) => console.error("Error loading data:", err));
    }, [id]);

    if (!product) {
        product
        return <p style={{ textAlign: "center", padding: "40px" }}>Loading ...</p>;
    }

    return (
        <>
            <Header />

            <div className='path-title'>
                <p className="path">
                    <span className='path-link' onClick={()=> navigate("/home")}>Home</span>
                    <span>&nbsp;&gt;&nbsp;</span>
                    <span className='path-link' onClick={()=>navigate("/shop")}>Shop</span>
                    <span>&nbsp;&gt;&nbsp;</span>
                    <span className='vertical-bar'>|</span>
                    <span className="path-current">{product.title}</span>
                </p>
            </div>

            <ProductDetail product={product} />
            <div className='product-desc'>
                <span className={activeTab === "desc" ? "tab active" : "tab"} onClick={() => setActiveTab("desc")}>Description</span>
                <span className={activeTab === "info" ? "tab active" : "tab"} onClick={() => setActiveTab("info")}>Additional Information</span>
            </div>
            <div className='tab-content'>
                {activeTab === "desc" && (
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam
                            officia, perspiciatis sunt iusto natus consectetur eaque architecto atque
                            officiis nobis consequuntur, asperiores molestias unde pariatur, non ipsum
                            distinctio tempore!
                        </p>
                        <br />

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil, pariatur
                            facere, voluptate commodi officiis odio rerum nam aliquid neque perferendis
                            dicta. Ea earum vitae fugit fuga eveniet accusantium molestiae! Dolorum
                            ducimus officia veniam labore mollitia repudiandae obcaecati quas
                            doloribus, suscipit odit iusto? Nesciunt quia minima ea culpa, illo laborum
                            distinctio numquam, obcaecati nostrum maiores optio id, cupiditate at
                            incidunt. Nemo adipisci maxime reprehenderit facilis, aliquam deserunt
                            quaerat. Aliquam blanditiis alias debitis, optio excepturi officiis soluta
                            autem. Ipsam, excepturi. Odio distinctio atque quo facilis incidunt
                            dignissimos? Voluptatibus possimus maiores corporis!
                        </p>
                    </div>
                )}

                {activeTab === "info" && (
                    <div>
                        <div className="desc-text">

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil, pariatur
                                facere, voluptate commodi officiis odio rerum nam aliquid neque perferendis
                                dicta. Ea earum vitae fugit fuga eveniet accusantium molestiae! Dolorum
                                ducimus officia veniam labore mollitia repudiandae obcaecati quas doloribus,
                                suscipit odit iusto? Nesciunt quia minima ea culpa, illo laborum distinctio
                                numquam, obcaecati nostrum maiores optio id, cupiditate at incidunt.
                            </p> <br />

                            <p>
                                Nemo adipisci maxime reprehenderit facilis, aliquam deserunt quaerat. Aliquam
                                blanditiis alias debitis, optio excepturi officiis soluta autem. Ipsam,
                                excepturi. Odio distinctio atque quo facilis incidunt dignissimos?
                                Voluptatibus possimus maiores corporis! Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Similique praesentium eveniet excepturi
                                temporibus blanditiis illo dignissimos veniam eos facilis incidunt cumque
                                modi quae, facere reprehenderit explicabo! Rerum nisi voluptatum quia.
                            </p> <br />

                            <p>
                                Placeat tempora beatae fugit est repellendus, adipisci voluptates aut ad
                                animi ab nulla suscipit possimus nihil quia minus maxime magnam! Culpa
                                blanditiis fuga praesentium. Ut quo facere odio minima exercitationem.
                            </p>

                        </div>
                    </div>
                )}
            </div>

            <div className='img'>
                {product?.images?.slice(0, 2).map((img, index) => (
                    <img key={index} src={img} />
                ))}
            </div>

            <p className='title-related'>Releted Product</p>

            <ProductGrid
                products={data}
                showHeading={false}
                showButton={true}
                pagination={false}
                itemsPerPage={5}
            />

           <Footer/>

        </>
    );
}

export default ProductDescription;
