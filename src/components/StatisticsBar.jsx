import React from 'react';
import { statistics } from '../data/siteData.js';

export default function StatisticsBar() {
  return (
    <div className="container stats-container">
      <div className="stats-bar">
        {statistics.map(([Icon, title, label]) => (
          <div className="stat" key={title}>
            <Icon />
            <b>{title}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
