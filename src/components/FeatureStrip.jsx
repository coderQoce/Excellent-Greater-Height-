import React from 'react';
import { features } from '../data/siteData.js';

export default function FeatureStrip() {
  return (
    <div className="container feature-wrap">
      <div className="feature-strip">
        {features.map(([Icon, title, description]) => (
          <div className="feature" key={title}>
            <Icon />
            <div>
              <b>{title}</b>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
