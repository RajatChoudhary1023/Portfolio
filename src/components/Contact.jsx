import React, { useState} from 'react';
import './Contact.css';

import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('https://portfolio-g8q2.onrender.com/send-email', formData);
    console.log(response.data.message);
    setFormData({ firstname: "", lastname: "", email: "", message: "" });
    alert('Your message has been sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.data : error.message);
    alert('Failed to send your message. Please try again.');
  }
};

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-heading">Let's Connect</h2>
        <p className="contact-subtext">
          I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Drop me a message, and I'll get back to you soon!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group form-name">
            <div className="name-field">
              <label htmlFor="firstname" className="form-label">First Name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname} // Bind input to state
                onChange={handleChange}
                className="form-input"
                placeholder="First name"
                required
              />
            </div>
            <div className="name-field">
              <label htmlFor="lastname" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname} // Bind input to state
                onChange={handleChange}
                className="form-input"
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email} // Bind input to state
              onChange={handleChange}
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message} // Bind textarea to state
              onChange={handleChange}
              rows="5"
              className="form-textarea"
              placeholder="Write your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
