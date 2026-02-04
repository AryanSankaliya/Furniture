import React, { useContext } from 'react'
import Header from '../../component/Header/Header'
import SemiFooter from '../../component/SemiFooter/SemiFooter'
import PageHeader from '../../component/PageHeader/PageHeader'
import { CartContext } from "../../component/CartContext/CartProvider";

import { FaTrash } from "react-icons/fa";
import "./Cart.css"
import Footer from '../../component/Footer/Footer'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const { cartItems, removeFromCart , updateQty  } = useContext(CartContext)
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  return (
    <>
      <Header />
      <PageHeader title="Cart" />
      <div className="cart-container">

        {/* LEFT SIDE TABLE */}
        <div className="cart-left">
          <div className="cart-header">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {/* PRODUCT ROW */}
          {cartItems.map((item, index) => (
            <div className="cart-row" key={index}>
              <div className="product-info">
                <img
                  src={item.images[0]}
                  className="product-img"
                  alt="product"
                />
                <p>{item.title}</p>
              </div>

              <p className="price">Rs. {(item.price).toLocaleString("en-IN")}</p>

              <input
                type="number"
                className="qty-box"
                value={item.qty}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                min="1"
                max="5"
              />



              <p className="subtotal">Rs. {(item.price * item.qty).toLocaleString("en-IN")} </p>

              <FaTrash className="delete-icon" onClick={() => removeFromCart(item.id)} />
            </div>

          ))}
        </div>


        {/* RIGHT SIDE TOTALS BOX */}
        <div className="cart-right">
          <h3>Cart Totals</h3>

          <div className="total-row">
            <p>Subtotal</p>
            <p className="grey">Rs. {total.toLocaleString("en-IN")}</p>
          </div>

          <div className="total-row">
            <p>Total</p>
            <p className="total-price">Rs. {total.toLocaleString("en-IN")}</p>
          </div>

          <button className="checkout-btn" onClick={() => navigate("/checkout")}>Check Out</button>
        </div>
      </div>
      <SemiFooter />
      <Footer />
    </>
  )
}

export default Cart