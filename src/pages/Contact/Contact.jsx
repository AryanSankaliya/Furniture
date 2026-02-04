import React from 'react';
import Header from "../../component/Header/Header";
import PageHeader from "../../component/PageHeader/PageHeader";
import SemiFooter from "../../component/SemiFooter/SemiFooter";
import Footer from "../../component/Footer/Footer";
import './Contact.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <>
      <Header />
      <PageHeader title="Contact" />

      <div className="contact-container">
        <h1>Get in Touch With Us</h1>
        <p className="contact-description">
          For More Information About Our Product & Services: Phone Feel Free To Drop Us<br />
          An Email: Our Staff Always Be There To Help You Out. Do Not Instruct!
        </p>

        <div className="contact-content">
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address</h3>
              <p>Office No. 23, GB 65,
                Magarpatta Road, Hadapsar,
                Pune, Maharashtra 411028,
                India</p>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <p>Customer Care: 1800-210-8899 </p>
              <p>Support Line: 1800-120-5544</p>
            </div>

            <div className="contact-item">
              <h3>Working Time</h3>
              <p>Monday–Friday: 9:00 - 22:00</p>
              <p>Saturday–Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Your name</h3>

              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Abog@al.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="This is an optional"
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-textarea"
                  placeholder="Hi! I'd like to ask about"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <SemiFooter />
      <Footer />
    </>
  )
}

export default Contact;