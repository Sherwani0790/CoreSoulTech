import React from "react";
import aboutImg from "../../assets/img/communication.svg";
const About = () => {
  return (
    <>
      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12 text-center p-5">
              <h2 className="fw-bold text-center mb-4">About Us</h2>
            </div>
            <div className="col-md-6 col-12 p-5">
              <p className="lead">
                Welcome to <b>CoreSoulTech</b>. We are a passionate team
                dedicated to delivering innovative tech solutions that empower
                businesses and individuals. Our mission is to bridge the gap
                between technology and everyday life, making complex systems
                simple and accessible for everyone.
              </p>
            </div>
            <div className="col-md-6 col-12 p-5">
                <img src={aboutImg} alt="" className="img-fluid border-radius-16"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center p-5">
              <h1>Our Team</h1>
            </div>
            <div className="col-md-12 text-center">
              <p className="lead">
                Our team is comprised of highly skilled professionals who are
                passionate about technology and committed to delivering
                exceptional solutions. With a deep understanding of the latest
                advancements in the tech industry, we strive to create
                innovative and user-friendly products that meet the needs of our
                clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
