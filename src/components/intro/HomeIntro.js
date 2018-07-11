import React from 'react';
import './homeintro.css';

export default function HomeIntro({ children }) {
  return (
    <div>
      {children}
      <div className="full-back" />
      <div className="logo-animable-container1">
        <img className="logo-in-black" src="/img/M_Degree-logo-black.svg" />
      </div>
    </div>
  );
}
