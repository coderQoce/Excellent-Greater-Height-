import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { programs, school } from '../data/siteData.js';

function ContactForm() {
  const [status, setStatus] = useState('');

  function submit(event) {
    event.preventDefault();
    setStatus('Thank you for your enquiry. This form is not connected to the school yet, so your message has not been sent.');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-grid">
        <label>
          Parent or guardian name
          <input name="parentName" required placeholder="Your name" />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" placeholder="Your phone number" />
        </label>
        <label>
          Student’s intended class
          <select name="class">
            <option value="">Select a class</option>
            {programs.map((program) => (
              <option key={program.title}>{program.title}</option>
            ))}
          </select>
        </label>
        <label className="full-field">
          Message
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Tell us how we can help…"
          />
        </label>
      </div>
      <button className="btn btn-gold" type="submit">
        Send Enquiry <ArrowRight />
      </button>
      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}

export default function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="container contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            We’d love to hear
            <br />
            <em>from you.</em>
          </h2>
          <p>
            Contact Excellent Greater Height Standard Academy for information
            about classes and admissions.
          </p>
          <div className="contact-detail">
            <span>
              <Phone />
            </span>
            <div>
              <small>Call the school</small>
              <a href={school.phoneHref}>{school.phone}</a>
            </div>
          </div>
          <div className="contact-detail">
            <span>
              <Mail />
            </span>
            <div>
              <small>Email</small>
              <a href={`mailto:${school.email}`}>{school.email}</a>
            </div>
          </div>
          <div className="contact-detail">
            <span>
              <MapPin />
            </span>
            <div>
              <small>Visit us</small>
              <a href="/index.html#contact">{school.address}</a>
            </div>
          </div>
        </div>
        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
