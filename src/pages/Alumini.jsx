import React from 'react';
import { Link } from 'react-router-dom';
import './Alumini.css';

export default function Alumini() {
  return (
    <section className="alumini-page">
      <div className="alumini-container">
        <h2>Alumini</h2>
        <p className="alumini-description">
          This is a placeholder page for the Alumni section. You can add alumni stories, testimonials,
          and details here.
        </p>
        <Link to="/" className="alumini-back-link">Back to Home</Link>
      </div>
    </section>
  );
}
