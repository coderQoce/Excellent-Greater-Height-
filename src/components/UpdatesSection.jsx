import React from 'react';
import { Bell, CalendarDays, Newspaper, ArrowRight } from 'lucide-react';

export default function UpdatesSection() {
  return (
    <section className="updates section-pad" id="news">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">SCHOOL LIFE</span>
          <h2>News & Events</h2>
          <p>Updates and important dates from our school community.</p>
        </div>
        <div className="update-grid">
          <article>
            <span>
              <Bell />
            </span>
            <h3>School Announcements</h3>
            <p>School notices and updates will be shared here.</p>
          </article>
          <article>
            <span>
              <CalendarDays />
            </span>
            <h3>Upcoming Events</h3>
            <p>Visit our news and events page for school calendar updates.</p>
          </article>
          <article>
            <span>
              <Newspaper />
            </span>
            <h3>Community News</h3>
            <p>Stories and highlights from Excellent Greater Height Academy.</p>
          </article>
        </div>
        <div className="program-cta">
          <a href="/news-events.html" className="btn btn-navy">
            Visit News & Events <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
