import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Contact from "./components/contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration in ms
      once: true, // animation happens only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <div data-aos="fade-up">
        <Hero />
      </div>
      <div data-aos="fade-up">
        <Services />
      </div>
      <div data-aos="fade-up">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
