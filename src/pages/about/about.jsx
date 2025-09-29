import React from "react";
import aboutImg from "../../assets/img/about.jpg";
import team1 from "../../assets/img/team/user.png";
import team2 from "../../assets/img/team/user-2.png";

const About = () => {
  const team = [
    {
      id: 1,
      name: "Aliza Khan",
      designation: "Full Stack Developer",
      img: team2,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      designation: "Project Manager",
      img: team2,
    },
    {
      id: 3,
      name: "Usman Malik",
      designation: "Lead Developer",
      img: team1,
    },
    {
      id: 4,
      name: "Ayesha Noor",
      designation: "UI/UX Designer",
      img: team2,
    },
    {
      id: 5,
      name: "Zainab Raza",
      designation: "Documentation Specialist",
      img: team2,
    },
    {
      id: 6,
      name: "Hassan Ali",
      designation: "WordPress Developer",
      img: team1,
    },
  ];

  return (
    <>
      {/* About Section */}
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
              <img
                src={aboutImg}
                alt="about"
                className="img-fluid border-radius-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center p-5">
              <h1 className="fw-bold">Our Team</h1>
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

          {/* Team Cards */}
          <div className="row justify-content-center">
            {team.map((member) => (
              <div key={member.id} className="col-md-3 col-sm-6 mb-4">
                <div className="team-card">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid"
                  />
                  <div className="team-overlay">
                    <h5>{member.name}</h5>
                    <p className="text-white">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
