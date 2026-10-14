import React from 'react';
import { ArrowRight, Globe2, GraduationCap, Heart } from 'lucide-react';
import { photos } from '../data/siteData.js';

export default function AboutSection() {
  return (
    <section className="about section-pad" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">ABOUT OUR SCHOOL</span>
            <h2>
              Strong Foundations
              <br />
              <em>Bright Possibilities</em>
            </h2>
            <p>
              Excellent Greater Height Standard Academy is located in Idioya,
              Ibadan. We support learners from kindergarten through senior
              secondary school with a caring approach to education and personal
              growth.
            </p>
            <a href="/about.html" className="btn btn-navy">
              Learn More About Us <ArrowRight />
            </a>
          </div>
          <div className="about-photo">
            <img
              src={photos.campus}
              alt="School building and campus grounds"
            />
            <span className="photo-caption">
              <i /> A place to learn and grow
            </span>
          </div>
          <div className="about-cards">
            <article>
              <span>
                <GraduationCap />
              </span>
              <div>
                <b>Kindergarten–SS 3</b>
                <small>Learning from early years to secondary</small>
              </div>
            </article>
            <article>
              <span>
                <Heart />
              </span>
              <div>
                <b>Whole-child care</b>
                <small>Learning, wellbeing and character</small>
              </div>
            </article>
            <article>
              <span>
                <Globe2 />
              </span>
              <div>
                <b>Our community</b>
                <small>Rooted in Idioya, Ibadan</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
