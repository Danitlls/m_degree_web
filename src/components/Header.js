import React from 'react';
import { Navbar, NavItem} from 'react-materialize';
import { Link, withRouter } from 'react-router-dom';
import './header.css';

function isHome(path) {
  return path && path === '/';
}

function applyBorderBottom(locationPath, path) {
  return locationPath === path
    ? 'nav-link-border'
    : '';
}

function Header({ location }) {
  const pathname = location && location.pathname;
  const topNavAbouUsLinkStyle = applyBorderBottom(pathname, '/about');
  const topNavPressLinkStyle = applyBorderBottom(pathname, '/press');
  const aboutUsStyles = `${topNavAbouUsLinkStyle} top-nav-mdegree nav-text-color hide-on-small-only`;
  const pressStyles = `${topNavPressLinkStyle} top-nav-mdegree nav-text-color hide-on-small-only`;
  const canShowLogo = !isHome(pathname) ||
  (isHome(pathname) && global.window.innerWidth <= 600);
  return (
    <div>
      <div className="empty"></div>
      <div className="nav-container">
        <Navbar right className="mdegree-nav">
        {canShowLogo &&
          <NavItem  className="mdegree-logo-container" href='/'>
            <img className="mdegree-logo"  src="/img/m-degree-logo-med.svg" />
          </NavItem>
        }
          <NavItem href='/about' id="about" className={aboutUsStyles}>About Us & <br />
          Contact
          </NavItem>
          <NavItem href='/press' className={pressStyles}>Press & <br />Collaborations</NavItem>

          <NavItem href='/about' className="nav-text-color hide-on-med-and-up">About Us & Contact </NavItem>
          <NavItem href='/press' className="nav-text-color hide-on-med-and-up">Press & Collaborations</NavItem>
          <NavItem className="subheader color-grey  hide-on-med-and-up">Our Work</NavItem>
          <NavItem href='/cakes' className="hide-on-med-and-up">Cakes</NavItem>
          <NavItem href='/plated' className="hide-on-med-and-up">Plated Desserts</NavItem>
          <NavItem href='/baked' className="hide-on-med-and-up">Baked</NavItem>
        </Navbar>

        <div className="second-logo-c hide-on-med-and-up" >
        {!isHome(pathname) &&
          <Link to='/' ><img src="/img/m-degree-logo-med.svg" className="second-logo" /></Link>
        }
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
