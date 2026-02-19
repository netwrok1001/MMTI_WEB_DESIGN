import { useState, useEffect } from 'react';
import './Modal.css';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if modal has been shown in this session
        const hasShownModal = sessionStorage.getItem('importantNoticeShown');
        if (!hasShownModal) {
            setIsOpen(true);
            sessionStorage.setItem('importantNoticeShown', 'true');
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>&times;</button>
                
                <h2 className="modal-heading">Important Notice</h2>
                <div className="modal-divider"></div>

                <div className="modal-body">
                    <div className="notice-section">
                        <p className="notice-highlight">
                            MR. ROHAN D'SOUZA, MMTI candidate, TOPPED the CHIEF MATE PHASE I AND PHASE II Exams conducted by DG/MMD. 
                            He was suitably awarded by the "CERTIFICATE OF APPRECIATION and Rs. 10000/- cash" by MMTI Management.
                        </p>
                        <p className="notice-highlight">
                            MMTI IS PROUD & WISH HIM ALL THE BEST FOR HIS FUTURE SEA CAREER.
                        </p>
                    </div>

                    <div className="notice-section">
                        <h3 className="section-subheading">REWARDING CANDIDATES TO ENCOURAGE/ENHANCE QUALITY:</h3>
                        
                        <div className="notice-item">
                            <p className="item-title">25% discount to Girl candidates:</p>
                            <p className="item-text">For Package Booking of Competency & Simulator courses (No other discounts will be applicable).</p>
                        </div>

                        <div className="notice-item">
                            <p className="item-title">MMTI'S Topper candidates in MMD examinations:</p>
                            <p className="item-text">
                                In Second Mate F.G., NWKO NCV, Chief Mate phase 1, Chief Mate Phase 2 & ASM will be rewarded with 
                                <span className="highlight"> Rs.10000/- cash & certificate of Appreciation </span> from MMTI.
                            </p>
                        </div>

                        <div className="notice-item">
                            <p className="item-title">MMTI'S Candidates who have passed all written MMD Examination in first attempt:</p>
                            <p className="item-text">Will be offered one simulator course free:</p>
                            <ul className="sub-list">
                                <li>For 2nd Mate F.G. it will be <span className="highlight">ARPA free</span>.</li>
                                <li>For Chief Mate F.G. Phase 1 & Phase 2, it will be <span className="highlight">RANSCO free</span>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <button className="modal-confirm-btn" onClick={closeModal}>I Understand</button>
            </div>
        </div>
    );
}
