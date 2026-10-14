import React from 'react';
import { ArrowRight } from 'lucide-react';
import InnerHero from '../components/InnerHero.jsx';
import Programs from '../components/Programs.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function ProgramsPage() {
  return (
    <>
      <InnerHero
        eyebrow="CLASSES & PROGRAMMES"
        title={
          <>
            Learning at every
            <br />
            <em>stage.</em>
          </>
        }
        subtitle="Explore the classes offered at Excellent Greater Height Standard Academy, from kindergarten through senior secondary."
      />
      <Programs interactiveDetails />
      <section className="detail-section detail-tint section-pad">
        <div className="container teacher-panel">
          <div>
            <span className="eyebrow">A LEARNING JOURNEY</span>
            <h2>
              From early years
              <br />
              <em>to SS 3.</em>
            </h2>
          </div>
          <div>
            <p>
              Our class structure includes Kindergarten, Nursery 1–2, Basic
              1–5, Junior Secondary JSS 1–3, and Senior Secondary SS 1–3.
              Contact the school for curriculum details, class placement, and
              admission requirements.
            </p>
            <a href="/index.html#contact" className="btn btn-navy">
              Ask about admissions <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
