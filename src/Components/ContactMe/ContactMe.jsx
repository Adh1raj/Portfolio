import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div id='contact' className="contact-me">
      <h1 className="contact-title">Get in touch</h1>
      
      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h2>Let's talk</h2>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          
          <div className="contact-details">
            <p><span>📧</span>adhirajrathore04@gmail.com</p>
            <p><span>📞</span> +91 8619749854</p>
            <p><span>📍</span> Jaipur, Rajasthan</p>
          </div>
        </div>
        
        {/* Right Side - Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          
          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
