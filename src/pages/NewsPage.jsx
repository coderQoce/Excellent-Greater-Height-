import React from 'react';
import { CalendarDays, Newspaper } from 'lucide-react';
import InnerHero from '../components/InnerHero.jsx';
import ContactSection from '../components/ContactSection.jsx';
import { announcements } from '../data/siteData.js';

export default function NewsPage() {
  const [featured, ...posts] = announcements;
  return (
    <>
      <InnerHero
        eyebrow="SCHOOL NEWSROOM"
        title={
          <>
            News, events &
            <br />
            <em>school notices.</em>
          </>
        }
        subtitle="Announcements and updates for the Excellent Greater Height Standard Academy community."
      />
      <section className="news-blog-section section-pad">
        <div className="container">
          <div className="blog-heading">
            <div>
              <span className="eyebrow">FROM OUR SCHOOL</span>
              <h2>Latest Announcements</h2>
              <p>Important news and dates for pupils and families.</p>
            </div>
            <span className="blog-mark">
              <Newspaper /> SCHOOL BLOG
            </span>
          </div>
          <article className="blog-featured-story">
            <div className="featured-story-image">
              <img src={featured.image} alt={featured.alt} />
              <span>FEATURED NOTICE</span>
            </div>
            <div className="featured-story-copy">
              <div className="blog-meta">
                <span>{featured.category}</span>
              </div>
              <h2>{featured.title}</h2>
              <p className="story-summary">{featured.summary}</p>
              <div className="event-facts">
                <div>
                  <small>DATE</small>
                  <b>{featured.date}</b>
                </div>
                <div>
                  <small>TIME</small>
                  <b>{featured.time}</b>
                </div>
              </div>
              <p className="story-body">{featured.body}</p>
            </div>
          </article>
          <div className="blog-section-label">
            <h3>More from the school</h3>
            <span>Announcements · Events · Community</span>
          </div>
          <div className="blog-post-grid">
            {posts.map((post) => (
              <article className="blog-card" key={post.title}>
                <div className="blog-card-image">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                  <span>{post.category}</span>
                </div>
                <div className="blog-card-copy">
                  <div className="blog-card-meta">
                    <span>
                      <CalendarDays /> {post.date}
                    </span>
                    <span>{post.time}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
