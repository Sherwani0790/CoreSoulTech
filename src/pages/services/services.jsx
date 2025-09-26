import React from "react";

const services = [
  {
    title: "Enterprise Apps",
    desc: "Scalable and secure enterprise-grade applications.",
  },
  {
    title: "CRM Portals",
    desc: "Custom CRM solutions to streamline business workflows.",
  },
  {
    title: "E-commerce",
    desc: "Robust online stores with seamless user experience.",
  },
  {
    title: "Fintech Apps",
    desc: "Secure and compliant financial technology platforms.",
  },
  { title: "Websites", desc: "Modern websites to represent your brand." },
  {
    title: "Reporting Portals",
    desc: "Data-driven dashboards and reporting systems.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container-fluid text-center">
        <h2 className="fw-bold mb-5">Our Services</h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text text-muted">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
