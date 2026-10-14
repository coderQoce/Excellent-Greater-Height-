import React from "react";
import { ArrowRight } from "lucide-react";
import InnerHero from "../components/InnerHero.jsx";
import ContactSection from "../components/ContactSection.jsx";
import { facilities, photos, teachers } from "../data/siteData.js";

export default function AboutPage() {
  return <>
      <InnerHero eyebrow="ABOUT OUR SCHOOL" title={<>
            A place to learn.
            <br />
            <em>A place to belong.</em>
          </>} subtitle="Learn more about Excellent Greater Height Standard Academy, our learning environment, and the people who support every pupil." />
      <section className="detail-section section-pad">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              Excellent Greater Height
              <br />
              <em>Standard Academy</em>
            </h2>
            <p>
              Our school is in Idioya, Ibadan, and welcomes learners from
              kindergarten through senior secondary. We aim to help pupils grow
              in knowledge, confidence, good character, and care for others.
            </p>
            <p>
              Families can contact the school to learn more about admissions,
              class placement, and the day-to-day experience of our pupils.
            </p>
            <a className="btn btn-gold" href="/index.html#contact">
              Ask us about the school <ArrowRight />
            </a>
          </div>
          <img src={photos.campus} alt="School campus" />
        </div>
      </section>
      <section className="detail-section detail-tint section-pad" id="facilities">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR LEARNING ENVIRONMENT</span>
            <h2>Facilities for Learning & Growth</h2>
            <p>
              Comfortable spaces for learning, play, creativity, and discovery.
            </p>
          </div>
          <div className="facility-grid">
            {facilities.map(([name, description, image, alt]) => <article className="facility-card" key={name}>
                <img src={image} alt={alt} loading="lazy" />
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>
      <section className="detail-section section-pad" id="teachers">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR TEACHERS</span>
            <h2>Meet the People Who Help Pupils Grow</h2>
            <p>
              Our teachers support pupils at each stage of their learning
              journey.
            </p>
          </div>
          <div className="teacher-grid">
            {teachers.map(([name, role, image]) => <article className="teacher-card" key={name}>
                <img src={image} alt={`${name} portrait`} loading="lazy" />
                <div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </div>
              </article>)}
          </div>
        </div>
      </section>
      <ContactSection />
    </>;
}
