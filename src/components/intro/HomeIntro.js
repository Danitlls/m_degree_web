import React from 'react';
import './homeintro.css';

export default function HomeIntro({ children }) {
  return (
    <div>
      {children}
      <div className="full-back" />

    <img className="logo-into" src="/img/mdegree_gif.gif" />

  </div>
  );
}
