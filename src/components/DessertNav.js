import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './dessertNav.css';

function isSelectedLink(locationPath, path) {
  return locationPath === path
  ? 'selected-desserts-link'
  : 'desserts-link';
}

function DessertNav(props) {
  const location = props.location.pathname;
  return (
    <div className="desserts-nav-container">
      <div className="desserts-nav">
        <Link to='/cakes' className={isSelectedLink(location, '/cakes')}>Cakes</Link>
        <Link to='/plated' className={isSelectedLink(location, '/plated')}>Plated Desserts</Link>
        <Link to='/baked' className={isSelectedLink(location, '/baked')}>Baked</Link>
      </div>
    </div>
  );
}

export default withRouter(DessertNav);
