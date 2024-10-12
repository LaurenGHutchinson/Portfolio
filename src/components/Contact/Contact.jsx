import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss'

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your own EmailJS service and template IDs
    const serviceID = 'service_t28llv7';
    const templateID = 'template_c0aaa7j';
    const userID = 'VpOzy0ma7i1yWc7lC';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        setStatusMessage('Message sent successfully!');
        setFormData({ email: '', subject: '', message: '' }); // Clear form after submission
      })
      .catch((error) => {
        setStatusMessage('Failed to send message. Please try again later.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <>
      <div className="contact">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 192 700 200"
                preserveAspectRatio="none"
                className="svg-top"
                transform="scale(-1, 1)"
              >
              <path fill="#d8cfc4" fillOpacity="1" d="M0,192L1440,320L1440,320L0,320Z"></path>
            </svg>
          </div>
        <div className="contact__body">

        <h2 className="contact__title">Get in Contact</h2>
        <p>I'd love to hear from you! Please reach out if you have any questions or would like to speak more.</p>
        <form className="contact__form-body" onSubmit={sendEmail}>
          <div className="contact__form-line">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="contact__form-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-line">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              className="contact__form-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-line">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              className="contact__form-input"
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__submit-body">
            <button type="submit" className="contact__submit-button labels">Send Message</button>
          </div>
        </form>
        {statusMessage && <p>{statusMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default ContactForm;
