import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer";
import Home from "./pages/home/home";
import Navbar from "./components/navbar";
import Services from "./pages/services/services";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
      <div className="position-fixed bottom-0 w-100">
        <Footer />
      </div>
    </>
  );
}

export default App;
