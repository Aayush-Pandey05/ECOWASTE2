import React from "react";
import "./AboutUs.css";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false, // Allow the animation to trigger multiple times
      offset: 200, // Trigger animation when 200px away from the viewport
      delay: 100, // Delay between animation trigger
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="about-us-container">
      <section className="about-us-hero">
        <h1 data-aos="zoom-in">About Us</h1>
        <div className="intro">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "We are committed to building a cleaner and greener future"
                )
                .pauseFor(500)
                .typeString(
                  "<br/>by offering innovative solutions for waste segregation, disposal, and sanitization."
                )
                .start();
            }}
          />
        </div>
      </section>

      <section className="about-us-details">
        {/* <div className="about-us-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide easy and effective waste management
            services, ensuring proper waste segregation and disposal to reduce
            environmental harm. We aim to create awareness and foster
            responsible habits for a more sustainable planet.
          </p>
        </div> */}

        <div className="about-us-video">
          <h2>Why Waste Management Matters</h2>
          <p>
            Watch this short video to understand the impact of improper waste
            management and how our platform can help solve this critical issue.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/something"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            data-aos="zoom-in-up"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
