import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { programs } from '../data/siteData.js';

export default function Programs({
  preview = false,
  interactiveDetails = false
}) {
  return (
    <section className="programs section-pad" id="academics">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">ACADEMICS</span>
          <h2>Discover Our Classes</h2>
          <p>A learning journey from kindergarten through senior secondary school.</p>
        </div>
        <div className="row g-4 program-row">
          {programs.map((program, index) => (
            <div
              className="col-12 col-sm-6 col-lg program-col"
              key={program.title}
            >
              <article className="program-card">
                <div className="program-image">
                  <img
                    src={program.image}
                    alt={`${program.title} learners`}
                    loading="lazy"
                  />
                  <span className="program-number">0{index + 1}</span>
                </div>
                <div className="program-content">
                  <h3>{program.title}</h3>
                  <p>{program.summary}</p>
                  <span className="program-age">{program.level}</span>
                </div>
                {interactiveDetails && (
                  <details className="program-details">
                    <summary>
                      Class details <ChevronDown aria-hidden="true" />
                    </summary>
                    <div className="program-detail-copy">
                      <b>About this class</b>
                      <p>{program.overview}</p>
                      <b>Learning benefits</b>
                      <p>{program.benefits}</p>
                    </div>
                  </details>
                )}
              </article>
            </div>
          ))}
        </div>
        {preview && (
          <div className="program-cta">
            <a href="/programs.html" className="btn btn-navy">
              Explore All Classes <ArrowRight />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
