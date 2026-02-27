import './About.css';

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-content">
                    <h2 className="section-title">About MMTI</h2>
                    <div className="section-accent"></div>

                    <p className="about-text">
                        The Mumbai Maritime Training Institute has a commitment to quality training. The Institute is ISO 9001:2015 Quality certified by DNV.
                         All the courses offered at MMTI are approved by DG Shipping. MMTI has been graded by DNV as A1 (outstanding) Institute). 
                         The strength of each class is limited to facilitate individual attention. You can discuss your individual needs, problems and requirements with the Institute and the faculty for the competency courses.
                          Even after your exams, you are always welcome to approach us for any guidance.MMTI is also selected as preferred institute by FOSMA- MASSA for competency & modular courses
                          <br /><br />
                          
                             The MMTI is headed by Capt. C. L. Dubey, B.Sc. Extra Master as Director & Owner and Capt. O. P. Yadav, Master F.G. as Director & Owner. Capt. Dubey has a vast teaching experience of about 6 years in LBS Nautical 
                          College and about 25 years in MMTI. One word guidance is being given by Capt. T. K. Joseph, Extra Master, Ex Principal LBS CAMSAR, Dr. Capt. Sudhir Kumar is Ph.D. from Mumbai University, an extra master, served 
                          mostly with maritime administrate & retired as principal officer MMD,Mumbai and Capt. L. K. Panda, Ex. Nautical Advisor – D.G.Shipping Govt. of India.
                             <br /><br />

                        MMTI prides in itself in teaching you what you need to know to be a competent Sailor/ Nautical Officer / Engineer Officer. The MMTI shares a special bond with the students and each one is free to discuss their problems
                         and requirements. MMTI believes that a better communication always works towards a better flow of thoughts and maintains a healthy attitude.
                    </p>
                    <div className="about-image">
                    <div className="director-card">
                        <img
                            src="./img/owner-director-1.png"
                            alt="Capt. C.L. Dubey"
                            className="director-img"
                        />
                        <div className="director-name">Capt. C.L. Dubey</div>
                    </div>

                    <div className="director-card">
                        <img
                            src="./img/owner-director-2.png"
                            alt="Capt. O.P. Yadav"
                            className="director-img"
                        />
                        <div className="director-name">Capt. O.P. Yadav</div>
                    </div>
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

                    <div className="quality-policy">
                        <h3>Quality Po(ISO CL. 5.2.1)</h3>
                        <p>
                            We at MMTI strive to provide maritime training of the highest standard to serving, or those intending 
                            to serve in the Merchant Navy, so that we have Safer and Securer Ships and Cleaner Seas. 
                            We aim to achieve this by explicitly complying with the STCW Convention as amended and all related National Legislation.
                        </p>
                    </div>
                </div>

                
            </div>
        </section>
    );
}
