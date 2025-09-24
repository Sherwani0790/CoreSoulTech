import React from "react";
const Hero = () => {
  return (
    <section id="home" className="vh-100 d-flex align-items-center bg-light">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-primary">Welcome to CoreSoulTech</h1>
        <p className="lead text-muted mt-3">
          We build enterprise apps, CRM portals, e-commerce platforms, fintech solutions, 
          websites, and reporting systems for modern businesses.
        </p>
        <a href="#services" className="btn btn-primary btn-lg mt-4">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
