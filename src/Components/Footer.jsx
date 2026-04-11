import React, { useState, useEffect } from 'react';
import './Footer.css';

export default function Footer() {
    const [phase, setPhase] = useState(1);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setPhase(prev => prev === 1 ? 2 : 1);
                setFade(true);
            }, 500); // Wait for fade out before changing content
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            {/* Dialogue Box */}
            <div className="dialogue-box">
                <div className={`dialogue-content ${fade ? 'fade-in' : 'fade-out'}`}>
                    {phase === 1 ? (
                        <div className="dialogue-grid">
                            <div className="dialogue-item">
                                <strong>E-mail for Documents Submission:</strong><br />
                                <a href="mailto:modulartwo@mmti.co.in">modulartwo@mmti.co.in</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>Whatsapp No for Documents Submission:</strong><br />
                                <a href="tel:8097008862">8097008862</a> / <a href="tel:9136397577">91363 97577</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>E-mail for Course details:</strong><br />
                                <a href="mailto:mmti.mumbai@gmail.com">mmti.mumbai@gmail.com</a> & <a href="mailto:mmti97@yahoo.com">mmti97@yahoo.com</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>Contact No Course details:</strong><br />
                                <a href="tel:8976008861">8976008861</a> / <a href="tel:8097008862">8097008862</a>
                            </div>
                        </div>
                    ) : (
                        <div className="dialogue-grid">
                            <div className="dialogue-item">
                                <strong>E-mail for Verification:</strong><br />
                                <a href="mailto:verify.mmtimum@gmail.com">verify.mmtimum@gmail.com</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>Contact No for Verification:</strong><br />
                                <a href="tel:8976008861">8976008861</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>For ONLINE BOOKING:</strong><br />
                                <a href="http://www.mmti.co.in" target="_blank" rel="noopener noreferrer">www.mmti.co.in</a> & <a href="http://www.mmtimumbai.in" target="_blank" rel="noopener noreferrer">www.mmtimumbai.in</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>Facebook:</strong><br />
                                <a href="https://www.facebook.com/mmti.mumbai" target="_blank" rel="noopener noreferrer">mmti.mumbai</a>
                            </div>
                            <div className="dialogue-item">
                                <strong>Whatsapp No.:</strong><br />
                                <a href="tel:8097008862">8097008862</a> / <a href="tel:9136397577">91363 97577</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Mumbai Maritime Training Institute. All rights reserved.</p>
                <div className="partner-logo">
                    <img src="/img/DNVLogo.jpg" alt="DNV Partner" />
                </div>
            </div>
        </footer>
    );
}
