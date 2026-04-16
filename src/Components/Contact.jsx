import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Footer from './Footer';

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-overlay"></div>
            <div className="contact-container">
                <h2 className="contact-title">CONTACT US</h2>

                <div className="contact-wrapper">
                    {/* Left Column: Form */}
                    <div className="contact-form-column">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" id="name" className="form-input" placeholder='Name'/>
                            </div>

                            <div className="form-group">
                                <input type="email" id="email" className="form-input" placeholder='E-mail'/>
                            </div>

                            <div className="form-group">
                                <input type="tel" id="contact" className="form-input"placeholder='Contact No.' />
                            </div>

                            <div className="form-checkbox">
                                <label className="checkbox-container">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    <span className="checkbox-label">I agree to the <span className="highlight">processing</span> of the personal data provided</span>
                                </label>
                            </div>

                            <button type="submit" className="send-btn">SUBMIT</button>
                        </form>
                    </div>

                    {/* Right Column: Info */}
                    <div className="contact-info-column">
                        <div className="contact-details-text">
                            <h3 className="institute-name">Mumbai Maritime Training <br />Institute</h3>
                            <p className="address-text">
                                2nd floor, 41/B, New Excel House, Azad Nagar <br /> Road No. 2,
                                Veera Desai Road, Andheri (West), <br />Mumbai – 400 053
                            </p>

                            <div className="contact-links">
                                <Link to="/feedback" className="feedback-btn">Feedback</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}
