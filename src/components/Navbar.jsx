// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <a href="/">EcoWaste</a> {/* You can customize the logo text */}
//       </div>
//       <ul className="navbar-links">
//         <li><a href="/">Home</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <li><a href="#dashboard" className="cta-btn-navbar">Login</a></li> {/* Call-to-action */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <a href="/">EcoWaste</a>
//       </div>
//       <ol className={isMobile ? "navbar-links active" : "navbar-links"}>
//         <li><a href="/">Home</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ol>
//       <div>
//         <li><a href="#dashboard" className="cta-btn-navbar">Login</a></li>
//       </div>
//       <div className="hamburger" onClick={() => setIsMobile(!isMobile)}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">EcoWaste</a>
      </div>
      <div className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
      <div className="buttons-container">
      <button className="sign-up-button">Sign Up</button>
      <button className="log-in-button">Log in</button>
    </div>
    </nav>
  );
};

export default Navbar;

