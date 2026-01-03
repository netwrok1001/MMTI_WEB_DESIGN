import './Contact.css';

export default function Contact() {
    return (
        <footer id="contact" className="contact">
            <div className="contact-container">
                {/* Main Contact Info */}
                <div className="contact-content">
                    {/* Mumbai Head Office */}
                    <div className="office-section">
                        <h3>🏢 MMTI Head Office & Training Centre</h3>
                        <p className="office-name">Mumbai Maritime Training Institute</p>
                        <p className="office-address">
                            2nd floor, 41/B, New Excel House, Azad Nagar Road No. 2,<br />
                            Veera Desai Road, Andheri (West), Mumbai – 400 053
                        </p>

                        <div className="contact-details">
                            <div className="detail-group">
                                <h4>Course Booking</h4>
                                <p>📧 <a href="mailto:mmti97@yahoo.com">mmti97@yahoo.com</a></p>
                                <p>📧 <a href="mailto:mmti53@hotmail.com">mmti53@hotmail.com</a></p>
                                <p>📞 <a href="tel:8976008861">8976008861</a> / <a href="tel:9136397577">91363 97577</a></p>
                            </div>

                            <div className="detail-group">
                                <h4>Documents Submission</h4>
                                <p>📧 <a href="mailto:modulartwo@mmti.co.in">modulartwo@mmti.co.in</a></p>
                                <p>📱 <a href="https://wa.me/918097008862">8097008862</a> / <a href="https://wa.me/919136397577">91363 97577</a> (WhatsApp)</p>
                            </div>

                            <div className="detail-group">
                                <h4>Course Details</h4>
                                <p>📧 <a href="mailto:mmti.mumbai@gmail.com">mmti.mumbai@gmail.com</a></p>
                                <p>📧 <a href="mailto:mmti97@yahoo.com">mmti97@yahoo.com</a></p>
                                <p>📞 <a href="tel:8976008861">8976008861</a> / <a href="tel:8097008862">8097008862</a></p>
                            </div>

                            <div className="detail-group">
                                <h4>Verification</h4>
                                <p>📧 <a href="mailto:verify.mmtimum@gmail.com">verify.mmtimum@gmail.com</a></p>
                                <p>📞 <a href="tel:8976008861">8976008861</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Valsad Office */}
                    <div className="office-section">
                        <h3>🏢 Valsad Booking Office</h3>
                        <p className="office-address">
                            1ST FLOOR LENWALA COMPLEX, PARADISE HOTEL,<br />
                            NEAR LAXMI CINEMA HALL, STATION ROAD VALSAD
                        </p>
                        <div className="contact-details">
                            <div className="detail-group">
                                <p>📱 <a href="tel:9825512967">9825512967</a></p>
                                <p>📧 <a href="mailto:kamleshprakashpal@gmail.com">kamleshprakashpal@gmail.com</a></p>
                                <p>📧 <a href="mailto:valsadmmti84@gmail.com">valsadmmti84@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Online & Social */}
                    <div className="office-section">
                        <h3>🌐 Online Booking & Social</h3>
                        <div className="contact-details">
                            <div className="detail-group">
                                <h4>Website Booking</h4>
                                <p><a href="http://www.mmti.co.in" target="_blank" rel="noopener noreferrer">www.mmti.co.in</a></p>
                                <p><a href="http://www.mmtimumbai.in" target="_blank" rel="noopener noreferrer">www.mmtimumbai.in</a></p>
                            </div>
                            <div className="detail-group">
                                <h4>Social Media</h4>
                                <p>📘 <a href="https://www.facebook.com/profile.php?id=100008920982506" target="_blank" rel="noopener noreferrer">mmti.mumbai</a></p>
                                <p>📱 <a href="https://wa.me/918097008862">WhatsApp: 8097008862 / 91363 97577</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QR Code Section */}
                <div className="qr-section">
                    <div className="qr-box">
                            <a href="./img/qrcodes.png" download="mmti-qrcodes.png" className="qr-download">
                                <img src="./img/qrcodes.png" alt="MMTI QR Codes" className="qr-image" />
                            </a>
                            <p className="qr-text">Scan to Visit Us — click image to download</p>
                        </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Mumbai Maritime Training Institute. All rights reserved.</p>
                <p>Celebrating 27 Years of Excellence in Maritime Training</p>
                <div className="partner-logo">
                    <img src="./img/DNVLogo.jpg" alt="DNV Partner" />
                  
                </div>
            </div>
        </footer>
    );
}
