import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { school } from '../data/siteData.js';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="top-contacts">
          <span>
            <MapPin /> Ibadan, Nigeria
          </span>
          <a href={school.phoneHref}>
            <Phone /> {school.phone}
          </a>
          <a href={`mailto:${school.email}`}>
            <Mail /> {school.email}
          </a>
        </div>
      </div>
    </div>
  );
}
