import React from 'react';

function Crest() {
  return (
    <span className="crest" aria-hidden="true">
      <span>EGH</span>
      <i>✦</i>
    </span>
  );
}
export default function Brand({
  footer = false
}) {
  return (
    <a
      className={`brand ${footer ? 'brand-footer' : ''}`}
      href="/index.html"
      aria-label="Excellent Greater Height Standard Academy home"
    >
      <Crest />
      <span className="brand-words">
        <b>EXCELLENT GREATER HEIGHT</b>
        <small>STANDARD ACADEMY</small>
      </span>
    </a>
  );
}
