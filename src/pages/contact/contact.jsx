import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Contact Us</h2>
        <div className="row mt-4">
          {/* Google Map */}
          <div className="col-md-12 mb-4">
            <iframe
              title="Islamabad Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26534.81221038792!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf76d5e6e2f7%3A0x2bb36f5c5c0db59d!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1695983210000!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="col-md-6 col-12 mb-4">
            <form onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Message */}
              <div className="mb-3">
                <label>Message</label>
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              {/* Contact Info Cards */}
              <div className="col-md-6 col-12 mb-4">
                <div className="contact-card card shadow-sm  text-center p-3">
                  <FaEnvelope size={20} className="text-primary mb-2" />
                  <h5>Email</h5>
                  <p className="text-muted">coresoultech@outlook.com</p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <div className="contact-card card shadow-sm  text-center p-3">
                  <FaPhoneAlt size={20} className="text-success mb-2" />
                  <h5>Phone</h5>
                  <p className="text-muted">+92 316 7758740</p>
                </div>
              </div>
              <div className="col-md-6 col-12 mb-4">
                <div className="contact-card card shadow-sm  text-center p-3">
                  <FaMapMarkerAlt size={20} className="text-danger mb-2" />
                  <h5>Address</h5>
                  <p className="text-muted">Islamabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
