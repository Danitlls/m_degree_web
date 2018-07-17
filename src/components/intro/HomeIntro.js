import React from 'react';
import './homeintro.css';

export default function HomeIntro({ children }) {
  return (
    <div>
      {children}
      <div className="full-back">
        <div className="logo-into">
         <img  src="/img/MDegree_Gif.gif" />
        </div>
      </div>
    </div>
  );
}
