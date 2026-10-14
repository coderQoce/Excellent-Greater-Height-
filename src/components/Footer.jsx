import React from 'react';
import { Facebook, Heart, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react';
import Brand from './Brand.jsx';
import { school } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Brand footer />
            <p>
              Excellent Greater Height Standard Academy
              <br />
              Growing with purpose. Learning for life.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <Youtube />
              </a>
              <a href="https://wa.me/2347038120089" aria-label="WhatsApp">
                <MessageCircle />
              </a>
              <a href="https://www.tiktok.com/" aria-label="TikTok">
                <Music2 />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <a href="/about.html">About the School</a>
            <a href="/programs.html">Classes & Programmes</a>
            <a href="/news-events.html">News & Events</a>
            <a href="/index.html#admissions">Admissions</a>
            <a href="/index.html#contact">Contact Us</a>
          </div>
          <div className="footer-col">
            <h3>Our School</h3>
            <a href="/about.html#facilities">Facilities</a>
            <a href="/about.html#teachers">Our Teachers</a>
            <a href="/programs.html">Kindergarten–SS 3</a>
          </div>
          <div className="footer-col footer-contact">
            <h3>Contact Us</h3>
            <p>
              <MapPin /> {school.address}
            </p>
            <a href={school.phoneHref}>
              <Phone /> {school.phone}
            </a>
            <a href={`mailto:${school.email}`}>
              <Mail /> {school.email}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Excellent Greater Height Standard Academy. All Rights
            Reserved.
          </span>
          <span>
            Growing with purpose <Heart />
          </span>
        </div>
      </div>
    </footer>
  );
}
