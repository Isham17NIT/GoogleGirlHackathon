import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Mediscan AI</h2>
        <p className="about-text">
          At <strong>Mediscan AI</strong>, we harness cutting-edge deep learning technology to revolutionize medical imaging analysis.
          Our AI-driven platform assists in the early detection of <strong>brain and kidney diseases</strong> by analyzing MRI and CT scans
          with exceptional accuracy. We empower healthcare professionals and patients with early intervention strategies for better treatment outcomes.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-box">
          <h3 className="feature-title">🚀 Fast & Accurate Diagnoses</h3>
          <p className="feature-text">Get instant AI-powered predictions from medical scans.</p>
        </div>

        <div className="feature-box">
          <h3 className="feature-title">🔍 Early Detection & Risk Assessment</h3>
          <p className="feature-text">Helps in early diagnosis to improve treatment outcomes.</p>
        </div>

        <div className="feature-box">
          <h3 className="feature-title">🌟 Seamless & User-Friendly</h3>
          <p className="feature-text">Upload your scan and receive a diagnosis in seconds.</p>
        </div>

        <div className="feature-box">
          <h3 className="feature-title">🧠 AI-Powered & Clinically Informed</h3>
          <p className="feature-text">Developed using state-of-the-art deep learning models.</p>
        </div>
      </div>

      <div className="mission-section">
        <h3 className="mission-title">Our Mission</h3>
        <p className="mission-text">
          We aim to bridge the gap between AI and healthcare by providing a smart, efficient, and accessible
          diagnostic tool for both patients and healthcare professionals.
        </p>
      </div>

      <div className="footer-text">
        <p>Mediscan AI – Early Detection, Better Protection! 🌟</p>
      </div>
    </section>
  );
};

export default About;
