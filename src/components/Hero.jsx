import React from 'react';
import { ArrowRight, Award, Play, X } from 'lucide-react';
import { photos } from '../data/siteData.js';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span /> WELCOME TO OUR SCHOOL
          </span>
          <h1>
            Growing with Purpose.
            <br />
            <em>Learning for Life.</em>
          </h1>
          <p>
            A caring school community where children build knowledge,
            confidence, and the skills to shape their future.
          </p>
          <div className="hero-actions">
            <a href="/about.html" className="btn btn-navy">
              Discover Our School <ArrowRight />
            </a>
            <button
              className="watch-btn"
              onClick={() =>
                document.getElementById('video-dialog').showModal()
              }
            >
              <span>
                <Play fill="currentColor" />
              </span>
              Our School
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars">
              <span>E</span>
              <span>G</span>
              <span>H</span>
            </div>
            <div>
              <b>Excellent Greater Height</b>
              <small>Standard Academy · Ibadan</small>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={photos.hero}
            alt="A young learner enjoying a colourful school activity"
          />
          <div className="hero-image-shade" />
          <div className="hero-image-tag">
            <span>LEARN · GROW · THRIVE</span>
          </div>
          <div className="excellence-badge">
            <span className="medal">
              <Award />
            </span>
            <div>
              <small>Welcome to</small>
              <b>EGH Academy</b>
              <small>Ibadan, Nigeria</small>
            </div>
          </div>
          <div className="image-index">
            LEARN <i /> GROW
          </div>
        </div>
      </div>
      <dialog id="video-dialog" className="video-dialog">
        <button
          className="dialog-close"
          aria-label="Close dialog"
          onClick={() => document.getElementById('video-dialog').close()}
        >
          <X />
        </button>
        <div className="dialog-content">
          <Play />
          <h2>Welcome to EGH Standard Academy</h2>
          <p>
            We look forward to sharing more about our school, learning
            programmes, and community.
          </p>
          <a
            className="btn btn-gold"
            href="/about.html"
            onClick={() => document.getElementById('video-dialog').close()}
          >
            Discover our school <ArrowRight />
          </a>
        </div>
      </dialog>
    </section>
  );
}
