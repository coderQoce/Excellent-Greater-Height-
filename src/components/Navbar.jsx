import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Brand from './Brand.jsx';
import TopBar from './TopBar.jsx';

const links = [
  ['Home', '/index.html'],
  ['About Us', '/about.html'],
  ['Admissions', '/index.html#admissions'],
  ['Academics', '/programs.html'],
  ['News & Events', '/news-events.html'],
  ['Contact', '/index.html#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <TopBar />
      <nav className="navbar navbar-expand-lg main-nav">
        <div className="container nav-container">
          <Brand />
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${open ? 'is-open' : ''}`}>
            <div className="nav-list">
              {links.map(([label, href]) => (
                <a key={label} href={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
            <a
              className="btn btn-gold nav-apply"
              href="/index.html#contact"
              onClick={closeMenu}
            >
              Enquire Now <ArrowRight />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
