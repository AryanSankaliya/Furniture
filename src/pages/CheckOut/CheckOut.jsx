import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import PageHeader from "../../component/PageHeader/PageHeader";
import SemiFooter from "../../component/SemiFooter/SemiFooter";
import Footer from "../../component/Footer/Footer";
import "./CheckOut.css";
import { CartContext } from "../../component/CartContext/CartProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Confetti from "react-confetti";

function CheckOut() {
  const [showConfetti, setShowConfetti] = useState(false);

  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "India",
    address: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    notes: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});

  // Update form data
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatPrice = (num) => {
    return num.toLocaleString("en-IN");
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    // LEFT SIDE VALIDATION
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter valid email";

    // RIGHT SIDE VALIDATION (PAYMENT)
    if (!form.payment) newErrors.payment = "Please select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fix all errors!",
      });
      return;
    }

    // Confetti show karo
    setShowConfetti(true);

    // SweetAlert success popup
    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully!",
      text: "Thank you for shopping with us 😊",
      showConfirmButton: false,
      timer: 2000,
    });

    // 2.5 sec baad confetti band
    document.body.style.overflowX = "hidden";
    // setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      document.body.style.overflowX = "auto";
    }, 2500);

    clearCart();

    setTimeout(() => {
      navigate("/");
    }, 2500);

    console.log("FORM DATA:", form);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={250}
        />
      )}
      <Header />
      <PageHeader title="Checkout" />

      <div className="checkout-container">

        {/* LEFT SIDE */}
        <div className="checkout-left">
          <h2 className="title">Billing details</h2>

          <div className="two-fields">
            <div>
              <label>First Name</label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
          </div>

          <label>Company Name (Optional)</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} />

          <label>Country / Region</label>
          <select name="country" value={form.country} onChange={handleChange}>
            <option>India</option>
            <option>Sri Lanka</option>
          </select>

          <label>Street address</label>
          <input type="text" name="address" value={form.address} onChange={handleChange} />
          {errors.address && <p className="error">{errors.address}</p>}

          <label>Town / City</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} />
          {errors.city && <p className="error">{errors.city}</p>}

          <label>Province</label>
          <select name="province" value={form.province} onChange={handleChange}>
            <option>Western Province</option>
            <option>Central Province</option>
          </select>

          <label>ZIP code</label>
          <input type="text" name="zip" value={form.zip} onChange={handleChange} />

          <label>Phone</label>
          <input type="text" name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label>Email address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Additional Information</label>
          <textarea rows="3" name="notes" value={form.notes} onChange={handleChange}></textarea>

        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">

          <div className="order-head">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          {cartItems.map((item) => (
            <div className="order-item">
              <span>{item.title} × {item.qty}</span>
              <span>Rs. {formatPrice(item.price * item.qty)}</span>
            </div>
          ))}

          <div className="order-row">
            <span>Subtotal</span>
            <span>  Rs.  {formatPrice(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))}</span>
          </div>

          <div className="order-total">
            <span>Total</span>
            <span className="total-price"> Rs. {formatPrice(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))}</span>
          </div>

          <div className="payment-box">

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={form.payment === "bank"}
                onChange={handleChange}
              />
              <span>Direct Bank Transfer</span>
             
            </label>

            <p className="payment-desc">
              Make your payment directly into our bank account.
            </p>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={form.payment === "cod"}
                onChange={handleChange}
              />
              <span>Cash on Delivery</span>
              
            </label>

            {errors.payment && <p className="error">{errors.payment}</p>}
          </div>

          <p className="privacy">
            Your personal data will be used to support your experience.
            Read our <b>privacy policy</b>.
          </p>

          <button className="place-order" onClick={handleSubmit}>
            Place order
          </button>
        </div>
      </div>

      <SemiFooter />
      <Footer />
    </>
  );
}

export default CheckOut;
