import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import About from './About';


export default function Home() {
  return (
    <div className="home-container">
      <div>
        <div className="logo-animable-container">
          <img className="logo-animable" src="/img/second-logo1.svg" />
        </div>
      </div>
      <div className="row home-desserts-container">
      <Link to='/cakes'>
          <div className="card-mm col s12 m4">
            <div className="image-container" >
              <img src="/img/cakes/IMG_7221.JPG" />
            </div>
            <span>Cakes</span>
          </div>
        </Link>
        <Link to='/plated'>
          <div className="card-mm  col s12 m4">
            <div className="image-container" >
              <img src="/img/plated/DSCF1887.jpg" />
            </div>
            <span>Plated Desserts</span>
          </div>
        </Link>
        <Link to='/baked'>
          <div className="card-mm  col s12 m4">
            <div className="image-container" >
              <img src="/img/baked/baked-main.jpg" />
            </div>
            <span>Baked</span>
          </div>
        </Link>
      </div>
      <div className="row home-desserts-container">
        <div className="card-mm  col s12 m6">
          <Link to='/about'>
            <div className="image-container" >
              <img src="/img/press/working.JPG" />
            </div>
            <span>About & Contact Us</span>
          </Link>
        </div>
        <div className="card-mm col s12 m6">
          <Link to='/press'>
            <div className="image-container" >
              <img src="/img/press/swire-2.png" />
            </div>
            <span>Press & Collaborations</span>
          </Link>
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}
