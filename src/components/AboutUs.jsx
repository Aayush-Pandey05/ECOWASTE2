import React from "react";
import "./AboutUs.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
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
    <div>
      <div className="hero-aboutus">
        <h1 data-aos="zoom-in">
          <b>About Us</b>
        </h1>
        <p>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
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
        </p>
      </div>

      <div className="about-us-video">
        <div className="aboutus-1" data-aos="zoom-in-up">
          <h2>Why Waste Management Matters</h2>
          <p>
            Watch this short video to understand the impact of improper waste
            management and how our platform can help solve this critical issue.
          </p>
        </div>
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/something"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-aos="zoom-in-up"
        />
      </div>
    </div>
  );
};

export default AboutUs;
