import './Courses.css';
import { useState } from 'react';

export default function Courses() {
    const [activeFilter, setActiveFilter] = useState('All');

    const courses = [
        {
            id: 1,
            title: "Basic Safety Training",
            duration: "2 Days",
            level: "Foundation",
            type: "Modular Courses",
            description: "Essential safety procedures and emergency protocols for maritime professionals.",
            highlights: ["Fire Safety", "First Aid", "Survival Techniques"]
        },
        {
            id: 2,
            title: "Second Mate (FG)",
            duration: "5 Months",
            level: "Professional",
            type: "Competency Courses",
            description: "Comprehensive training for Second Officer certification and competency.",
            highlights: ["Navigation", "Seamanship", "Cargo Operations"]
        },
        {
            id: 3,
            title: "Chief Mate Phase 1 & 2",
            duration: "6 Months",
            level: "Advanced",
            type: "Competency Courses",
            description: "Executive-level training for Chief Officer positions on commercial vessels.",
            highlights: ["Leadership", "Ship Management", "International Regulations"]
        },
        {
            id: 4,
            title: "Advanced Safety Management",
            duration: "3 Days",
            level: "Professional",
            type: "Refresher's Courses",
            description: "Advanced safety protocols and incident management for maritime leaders.",
            highlights: ["Risk Assessment", "Crisis Management", "Safety Documentation"]
        },
        {
            id: 5,
            title: "NWKO (NCV)",
            duration: "2 Months",
            level: "Foundation",
            type: "Package Courses",
            description: "National Voyage Knowledge course for aspiring maritime officers.",
            highlights: ["Navigation Skills", "Deck Operations", "Safety Procedures"]
        },
        {
            id: 6,
            title: "Tanker Training",
            duration: "1 Week",
            level: "Specialized",
            type: "Simulator Courses",
            description: "Specialized training for tanker vessel operations and regulations.",
            highlights: ["Hazmat Procedures", "Cargo Safety", "Environmental Protection"]
        }
    ];

    const filterOptions = ['All', 'Modular Courses', 'Package Courses', "Refresher's Courses", 'Competency Courses', 'Simulator Courses'];

    const filteredCourses = activeFilter === 'All' ? courses : courses.filter(course => course.type === activeFilter);

    return (
        <section id="courses" className="courses">
            <div className="courses-container">
                <div className="courses-header">
                    <h2 className="section-title">Our Courses</h2>
                    <div className="section-accent"></div>
                    <p className="section-subtitle">
                        Comprehensive maritime training programs designed to meet international standards
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-section">
                    <h3 className="filter-title">Filter by Course Type</h3>
                    <div className="filter-buttons">
                        {filterOptions.map((filter) => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                

                <div className="courses-grid">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="course-card">
                                <div className="course-header">
                                    <span className="course-level">{course.level}</span>
                                    <span className="course-duration">⏱️ {course.duration}</span>
                                </div>
                                
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-type">{course.type}</p>
                                <p className="course-description">{course.description}</p>

                                <div className="course-highlights">
                                    <h4>Key Topics:</h4>
                                    <ul>
                                        {course.highlights.map((highlight, idx) => (
                                            <li key={idx}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>

                                <button className="course-btn">Enroll Now</button>
                            </div>
                        ))
                    ) : (
                        <div className="no-courses">No courses available for this filter.</div>
                    )}
                </div>

                <div className="courses-cta">
                    <h3>Ready to start your maritime career?</h3>
                    <p>Book your seat today and join thousands of successful MMTI alumni</p>
                    <a href="#book" className="cta-btn">Book Your Seat</a>
                </div>
            </div>
            {/* Important Notices */}
                <div className="courses-notice">
                    <h3 className="notice-heading">Important Notices</h3>

                    <div className="notice-block">
                        <p className="notice-line">📌 <strong>Certificate Charges Update (Effective 01/02/2025):</strong></p>
                        <p className="notice-text">Certificates generated from the DG Shipping Portal will incur additional charges:</p>
                        <ul className="notice-list">
                            <li>Fees per certificate: ₹36</li>
                            <li>GST @18%: ₹6.48</li>
                            <li><strong>Total: ₹42.48/-</strong></li>
                        </ul>

                        <p className="notice-line">💳 <strong>Course Booking Payment Policy:</strong></p>
                        <p className="notice-text">Internet handling charges apply when booking courses via our website using the payment gateway.</p>
                        <p className="notice-text">No extra charges if payment is made directly to MMTI via debit/credit card or cheque.</p>

                        <p className="notice-line">👔 <strong>Dress Code Guidelines:</strong></p>
                        <p className="notice-text">This policy ensures a professional environment within the institution. Please adhere to the following:</p>
                        <ul className="notice-list">
                            <li><strong>Men:</strong> Formal shirt and trousers or collared T-shirts with trousers. Formal shoes.</li>
                            <li><strong>Women:</strong> Formal shirts, sarees, or kurtis (except sleeveless) with leggings/pants. Formal footwear.</li>
                            <li>Casual wear such as ripped jeans, collarless T-shirts, shorts, mini/midi skirts, sandals, and bathroom slippers are not permitted for physical classes from Monday to Friday. Saturdays may be informal.</li>
                        </ul>

                        <p className="notice-line">📱 <strong>General Conduct & Safety:</strong></p>
                        <ul className="notice-list">
                            <li>Mobiles must be kept in bags and not used during classes.</li>
                            <li>Smoking is allowed only in the designated area on the ground floor.</li>
                            <li>Maximum 8 persons allowed in the lift at a time. Overloading may lead to severe consequences.</li>
                            <li>Failure to comply with these instructions may result in disciplinary action.</li>
                        </ul>

                        <p className="notice-text">🙏 We appreciate your cooperation in upholding the professional standards of our institute.</p>
                    </div>
                </div>
        </section>
    );
}
