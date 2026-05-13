import React, { useState } from "react";
import "./Enroll.css";
import Footer from "../Components/Footer";

const Enroll = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    passportNumber: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the Terms & Conditions before submitting.");
      return;
    }
    console.log("Form Data:", formData);
    alert("Thank you for enrolling! We will contact you shortly.");
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      passportNumber: "",
    });
    setAgreedToTerms(false);
  };

  return (
    <>
      <section className="enroll">
        <div className="enroll-container">
          <div className="enroll-header">
            <h1>ENROLLMENT FORM</h1>
            <p>Join Mumbai Maritime Training Institute</p>
          </div>

          <div className="enroll-form-wrapper">
            <form onSubmit={handleSubmit}>
              {/* Course Information Table */}
              <div className="course-table-section">
                <h2 className="form-section-title">Course Details & Fees</h2>
                <table className="course-table">
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Course Fees</th>
                      <th>Payment Gateway Fees</th>
                      <th>Payment gateway Fees</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Liquefied Gas Tanker Familarization Course(LGTFC)</td>
                      <td>5000/-</td>
                      <td>100/-</td>
                      <td>0/-</td>
                      <td>5100/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Personal Information Section */}
              <div className="form-section">
                <h2 className="form-section-title">Personal Information</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Phone Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>
                      Passport Number <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      className="form-input"
                      placeholder="Enter your passport number"
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div></div>
                </div>
              </div>

              {/* Course Batch Details Table */}
              <div className="course-batch-section">
                <h2 className="form-section-title">Course Batch Details</h2>
                <table className="course-batch-table">
                  <thead>
                    <tr>
                      <th>Course Batch</th>
                      <th>In case of Refresher Course (Cert. No)</th>
                      <th>Issue Date</th>
                      <th>Institute Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Liquefied Gas Tanker Familarization Course(LGTFC)</td>
                      <td>LGTF (23 Nov 2026 - 27 Nov 2026)</td>
                      <td>
                        <input type="date" />
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Terms and Conditions */}
              <div className="terms-container">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <span>
                    I have read this Agreement and agree to these{" "}
                    <button
                      type="button"
                      className="terms-link-btn"
                      onClick={() => setShowTermsModal(true)}
                    >
                      Terms & Conditions
                    </button>
                    .
                  </span>
                </label>
              </div>

              {/* Form Buttons */}
              <div className="form-buttons">
                <button
                  type="submit"
                  className={`submit-btn ${!agreedToTerms ? "disabled" : ""}`}
                  disabled={!agreedToTerms}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={handleReset}
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Terms & Conditions Modal */}
        {showTermsModal && (
          <div
            className="terms-modal-overlay"
            onClick={() => setShowTermsModal(false)}
          >
            <div
              className="terms-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="terms-modal-header">
                <h2>Terms & Conditions</h2>
                <button
                  className="close-modal-btn"
                  onClick={() => setShowTermsModal(false)}
                >
                  &times;
                </button>
              </div>
              <div className="terms-modal-body">
                <h3>General Terms & Conditions</h3>
                <p>
                  The information displayed on this site is provided on a 'best
                  efforts' and 'as is' basis without any warranties of any kind,
                  including, but not limited to any implied warranties of
                  merchantability or fitness for any particular purpose. The
                  users of www.mmti.co.in claim the entire responsibility for
                  the selection and use of the service(s) and neither the MMTI
                  nor any of its information providers, licensers, employees,
                  partners or agents shall have any liability for any errors,
                  malfunctions, defects, loss of data, resulting from the use or
                  inability to use the service. In no event shall the liability
                  of the MMTI, if any, exceed the amount paid, if any, by the
                  user. While utmost care is taken to provide correct and up to
                  date information, the MMTI does not warrant the accuracy,
                  completeness and timely availability of the information
                  provided on the site and accepts no responsibility or
                  liability for any error or omission in any information
                  provided on the site nor does the site claim to be
                  comprehensive in its coverage of examinations (either
                  competitive or otherwise in nature) and/or of the various
                  educational or maritime training program conducted in India.
                </p>
                <p>
                  This website may contain information about various academic
                  programs and maritime training programs offered by institutes
                  and/or institutions as well as about various examinations that
                  are conducted by them, or by the Directorate General of
                  Shipping, or by independent parties/third parties in India.
                  This information has been compiled from various sources,
                  including primary research conducted by, or on behalf of the
                  MMTI as well as secondary or desk research. The MMTI will in
                  no event be liable for any direct, incidental, consequential
                  or indirect damages arising out of the use of or inability to
                  use and/or for any delay in the service provided by the site.
                  THE INFORMATION AVAILABLE ON THIS SITE IS FOR GENERAL
                  INFORMATION PURPOSES.
                </p>

                <p>
                  The MMTI expressly disclaims any warranties whether express or
                  implied about the suitability, reliability, availability,
                  timeliness, correctness, completeness, quality, continuity,
                  performance, fitness of products, services contained/displayed
                  within this website for any purpose.
                </p>

                <h3>Any Questions ?</h3>
                <p>
                  For any doubts/clarifications or additional information that
                  you may require, please contact us at mmti53@hotmail.com or
                  mmti97@yahoo.com
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Enroll;
