import React, { PropTypes } from 'react';
import {  withRouter } from 'react-router-dom';
import './homeintro.css';

export default function HomeIntro() {
  return (
    <div>
      <div className="full-back"></div>
      <div className="logo-animable-container1">
        <img className="logo-animable1" src="/img/M_Degree-logo-white-1.svg" />
      </div>
      <div className="logo-animable-container1">
        <img className="logo-in-black" src="/img/M_Degree-logo-black.svg" />
      </div>
    </div>
  );
}
