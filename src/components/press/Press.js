import React from 'react';
import './press.css';
import PressPageManager from './PressPageManager';
import PressArticlePhotos from './press.json';

// TODO: Go through this style sheet.
// import './pressGrid.css';

export default function Press() {
  return (
    <div className="press">
      <PressPageManager images={PressArticlePhotos} />
      <h1 className="hiddenMM">A Sweet Experience, pastry consultant and colaborations</h1>
    </div>
  );
}
