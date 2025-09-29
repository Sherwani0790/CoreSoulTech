import React from "react";
import img1 from "../../assets/img/slide-1.jpg";
import img2 from "../../assets/img/slide-2.jpg";
import img3 from "../../assets/img/slide-3.jpg";
const Home = () => {
  return (
    <>
    
    <section id="home" className="d-flex align-items-center bg-light mt16">
      <div className="container-fluid text-center">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner border-radius-16 shadow-lg">
            <div className="carousel-item border-radius-16 active">
              <img
                className="img-fluid h-800 border-radius-16"
                src={img1}
                alt="First slide"
              />
            </div>
            <div className="carousel-item border-radius-16">
              <img
                className="img-fluid h-800 border-radius-16"
                src={img2}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item border-radius-16">
              <img
                className="img-fluid h-800 border-radius-16"
                src={img3}
                alt="Third slide"
              />
            </div>
          </div>

          {/* Prev button */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          {/* Next button */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    
    </>
  );
};
export default Home;
