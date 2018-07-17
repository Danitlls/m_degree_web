import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <div className="logo-animable-container">
          <img className="logo-animable" src="/img/MDegree_LogoTag_Final.png" />
        </div>
      </div>

      <div className="row mx-5 mt-2 home-desserts-container">

        <div className="card-mm  col s12 m6">
          <Link to='/about'>
            <div className="image-container" >
              <img src="/img/press/IMG_94991.jpg" />
            </div>
            <span>About & Contact Us</span>
          </Link>
        </div>

        <div className="card-mm col s12 m6">
          <Link to='/press'>
            <div className="image-container" >
              <img src="/img/press-home.JPG" />
            </div>
            <span>Press & Collaborations</span>
          </Link>
        </div>
        <Link to='/cakes'>
          <div className="card-mm col s12 m6 l4">
            <div className="image-container" >
              <img src="/img/cakes/cakes01.jpg" />
            </div>
            <span>Cakes</span>
          </div>
        </Link>
        <Link to='/plated'>
          <div className="card-mm  col s12 m6 l4">
            <div className="image-container" >
              <img src="/img/plated/DSCF1887.jpg" />
            </div>
            <span>Plated Desserts</span>
          </div>
        </Link>
        <Link to='/baked'>
          <div className="card-mm  col m12 l4">
            <div className="image-container" >
              <img src="/img/baked/croi1.jpg" />
            </div>
            <span>Baked</span>
          </div>
        </Link>
      </div>
      <h1 className="hidden">M degree, by Mauro Pompili and Maya Sitti, pastry cheff </h1>
    </div>
  );
}
