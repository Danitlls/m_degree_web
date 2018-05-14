import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './home.css';


export default function Home() {
  return (
    <div className="home-container">
      <div>
        <div className="logo-animable-container">
          <img className="logo-animable" src="/img/second-logo.svg" />
        </div>
      </div>
      <div className="home-desserts-container">
        <div className="card-dessert">
          <Link to='/cakes'>
            <img src="/img/cakes/IMG_7221.JPG" />
            <span>Cakes</span>
          </Link>
        </div>
        <div className="card-dessert">
          <Link to='/plated'>
            <img src="/img/plated/plated-5.JPG" />
            <span>Plated Desserts</span>
          </Link>
        </div>
        <div className="card-dessert">
          <Link to='/baked'>
            <img src="/img/baked/baked-main.jpg" />
            <span>Baked</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
