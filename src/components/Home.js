import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './home.css';


export default function Home() {
  return (
    <div>
      <div>
        <div className="logo-animable-container">
          <img className="logo-animable" src="/img/M_Degree-logo-black.svg" />
        </div>
      </div>
      <div className="home-desserts-container">
        <div className="card-dessert">
          <img src="/img/cakes/IMG_7221.JPG" />
          <Link to='/cakes'>Cakes</Link>
        </div>
        <div className="card-dessert">
          <img src="/img/plated/plated-5.JPG" />
          <Link to='/plated'>Plated Desserts</Link>
        </div>
        <div className="card-dessert">
          <img src="/img/baked/baked-main.jpg" />
          <Link to='/baked'>Baked</Link>
        </div>
      </div>
    </div>
  );
}
