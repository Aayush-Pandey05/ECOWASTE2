


import React from 'react';
import './Home.css'; // External CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content" id="left">
          <h1>Transforming Waste into Resources for a Greener Tomorrow</h1>
          <p>Join us in making waste management easier for a sustainable future.</p>
          <div className="cta-buttons">
            <button className="cta-btn">Get Started</button>
            <button className="cta-btn secondary">Learn More</button>
          </div>
        </div>
        <div className="image" id="right">
          <img src="https://static.vecteezy.com/system/resources/previews/004/341/571/original/waste-management-eco-friendly-living-2d-web-banner-poster-garbage-separation-man-and-woman-sorting-trash-flat-characters-on-cartoon-background-printable-patches-colorful-web-elements-vector.jpg" alt="Hero" />
        </div>
      </section>
    </div>
  );
};

export default Home;
