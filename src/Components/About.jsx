import './About.css';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title">About MMTI</h2>
                    <div className="section-accent"></div>

                    <p className="about-text">
                        The Mumbai Maritime Training Institute has a commitment to quality training. The Institute is ISO 9001:2015 Quality certified by DNV. All the courses offered at MMTI are approved by DG Shipping. MMTI has been graded by DNV as A1 (outstanding) Institute. The strength of each class is limited to facilitate individual attention. You can discuss your individual needs, problems and requirements with the Institute and the faculty for the competency courses. Even after your exams, you are always welcome to approach us for any guidance.
                        MMTI is also selected as preferred institute by FOSMA- MASSA for competency & modular courses Several “Best Training Institute” and “Best Student” awards are testimony to this fact.
                        Located in the heart of Mumbai at Andheri, we are close to Andheri Railway Station, a couple of hundred meters to two Metro lines and are also serviced by several bus routes & taxi services and easily accessible from Airport.

                        <br /><br />
                        <h3>The MMTI is run professionally and promoted by </h3>
                        <p className='owner-info'>
                            <b>Capt. C. L. Dubey</b>, Director & Owner is a science graduate, Master Mariner, and Extra Master with over 20 years of sailing experience and 34 years as a maritime trainer. He has served as a paper setter, moderator, and examiner at Mumbai University, as well as a paper setter and examiner for the Directorate General of Shipping, Government of India. He has also been a fellow and warden of The Company of Master Mariners of India (CMMI). Capt. Dubey represented India as part of the delegation at the “Human Element, Training and Watchkeeping” Ninth Session (HTW9) meeting at IMO London in February 2023 and also participated in HTW 10 and HTW 11 as an online attendee. He is the author of several maritime textbooks used by students in India and abroad and was appointed as a “Competent Person” by IMO in February 2024.
                        </p>

                        <p className='owner-info'>
                            <b>Capt. O. P. Yadav</b>, Director & Owner, is a Master Mariner with 26 years of sailing experience and 28 years as a maritime trainer. He serves on the panel for oral examinations conducted by the Directorate General of Shipping, Government of India, and has been a member of The Company of Master Mariners of India (CMMI).</p>

                        <p className='owner-info'>
                            <b>Capt. F. X. Coutinho</b>, Principal, is a Master Mariner with 12 years of sailing experience and 22 years of experience as a maritime trainer. He is part of the oral examination panel for the Directorate General of Shipping, Government of India, and also serves on the paper correction panel within the same organization.</p>

                        <p className='owner-info'>
                            <b>Capt. M. R. Martins</b>, Vice-Principal, is a Master Mariner with 10 years of sailing experience and 12 years of experience as a maritime trainer. He is also a member of the oral examination panel for the Directorate General of Shipping, Government of India, and is part of the paper correction group in D.G. Shipping
                        </p>
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <div className="card-icon">⚓</div>
                        <h3>STCW Compliant</h3>
                        <p>All courses strictly adhere to International STCW Convention standards for safer and more secure ships.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">👨‍🎓</div>
                        <h3>Expert Faculty</h3>
                        <p>Learn from highly experienced maritime professionals with years of practical experience at sea.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">🏆</div>
                        <h3>100% Quality</h3>
                        <p>ISO certified training with proven track record of producing top-quality maritime professionals.</p>
                    </div>

                    <div className="about-card">
                        <div className="card-icon">🌍</div>
                        <h3>Industry Recognized</h3>
                        <p>Our certifications are recognized globally, opening doors to international maritime careers.</p>
                    </div>
                </div>
                <div className="alumni-network">
                    <div className="alumni-image-holder">
                        <div className="alumni-image-blank">Alumni Image</div>
                    </div>
                    <div className="alumni-action">
                        <h3>Alumni Network</h3>
                        <p>Connect with the MMTI alumni community and explore success stories from past students.</p>
                        <Link to="/alumini" className="alumni-btn">Visit Alumni Network</Link>
                    </div>
                </div>
                <div className="quality-policy">
                    <h3>Quality Po(ISO CL. 5.2.1)</h3>
                    <p>
                        We at MMTI strive to provide maritime training of the highest standard to serving, or those intending
                        to serve in the Merchant Navy, so that we have Safer and Securer Ships and Cleaner Seas.
                        We aim to achieve this by explicitly complying with the STCW Convention as amended and all related National Legislation.
                    </p>
                </div>
                <section id="faculty" className="faculty">

                    <h2 className="section-title">Our Directors</h2>
                    <div className="about-image">
                        <div className="director-card">
                            <img
                                src="/img/owner-director-1.png"
                                alt="Capt. C.L. Dubey"
                                className="director-img"
                            />
                            <div className="director-name">Capt. C.L. Dubey</div>
                        </div>

                        <div className="director-card">
                            <img
                                src="/img/owner-director-2.png"
                                alt="Capt. O.P. Yadav"
                                className="director-img"
                            />
                            <div className="director-name">Capt. O.P. Yadav</div>
                        </div>
                    </div>
                    <div className="team-button-container">
                        <Link to="/faculty">
                            <button className="cta-btn">View our Team</button>
                        </Link>
                    </div>
                </section>
            </div>
        </section >
    );
}
