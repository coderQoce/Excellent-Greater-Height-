import React from 'react';

export default function InnerHero({
  eyebrow,
  title,
  subtitle
}) {
  return (
    <section className="inner-hero">
      <div className="container">
        <a href="/index.html" className="back-link">
          Home <span>/</span> {eyebrow}
        </a>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
