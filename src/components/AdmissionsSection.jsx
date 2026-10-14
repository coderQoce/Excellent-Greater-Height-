import React from 'react';
import { ArrowRight, BookOpen, Check } from 'lucide-react';
import { photos } from '../data/siteData.js';

export default function AdmissionsSection() {
  return (
    <section className="admissions section-pad" id="admissions">
      <div className="container">
        <div className="admissions-grid">
          <div className="admissions-photo">
            <img
              src={photos.admissions}
              alt="Children reading together outdoors"
              loading="lazy"
            />
            <div className="admissions-photo-note">
              <BookOpen />
              <span>
                <b>Every learner matters</b>
                <small>A bright start begins here</small>
              </span>
            </div>
          </div>
          <div className="admissions-copy">
            <span className="eyebrow">ADMISSIONS</span>
            <h2>
              Begin Your Journey
              <br />
              <em>At EGH Academy</em>
            </h2>
            <p>
              Join a community where your child can learn, grow, and prepare for
              the next stage of their education.
            </p>
            <div className="admissions-actions">
              <a href="/index.html#contact" className="btn btn-gold">
                Enquire Now <ArrowRight />
              </a>
            </div>
            <div className="admission-note">
              <Check /> Contact us to learn about admission enquiries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
