import React from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css';

export default function Feedback() {
  return (
    <section className="feedback-page">
      <div className="feedback-container">
        <h2>Feedback</h2>
        <p className="feedback-placeholder">
          This page is reserved for the feedback form. Add your feedback fields here when ready.
        </p>
        <Link to="/" className="feedback-back-link">Back to Home</Link>
      </div>
    </section>
  );
}
