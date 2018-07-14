import React from 'react';
import './homeintro.css';

export default function HomeIntro({ children }) {
  return (
    <div>
      {children}
      <div className="full-back">
        <div className="logo-into">
          // <img  src="/img/mdegree_gif.gif" />
          <img  src="/img/MDegree_LogoTag_Final_small.png" />
        </div>
      </div>
    </div>
  );
}
