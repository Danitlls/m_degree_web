import React from 'react';
import { Navbar, NavItem} from 'react-materialize';
import { Link, withRouter } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <div>
      <div className="empty"></div>
      <div className="nav-container">
        <Navbar right className="mdegree-nav">
          <NavItem  className="mdegree-logo-container" href='/'>
            <img className="mdegree-logo"  src="/img/M_Degree-logo.png" />
          </NavItem>
          <NavItem href='/about' className="top-nav-mdegree nav-text-color hide-on-small-only">About & <br /> Contact Us</NavItem>
          <NavItem href='/press' className="top-nav-mdegree nav-text-color hide-on-small-only">Press & <br />Collaborations</NavItem>

          <NavItem href='/about' className="nav-text-color hide-on-med-and-up">About & Contact Us</NavItem>
          <NavItem href='/press' className="nav-text-color hide-on-med-and-up">Press & Collaborations</NavItem>
          <br />
          <NavItem href='/cakes' className="hide-on-med-and-up">Cakes</NavItem>
          <NavItem href='/plated' className="hide-on-med-and-up">Plated Desserts</NavItem>
          <NavItem href='/baked' className="hide-on-med-and-up">Baked</NavItem>
        </Navbar>

        <div className="second-logo-c hide-on-med-and-up" >
          <Link to='/' ><img src="/img/M_Degree-logo.png" className="second-logo" /></Link>
        </div>
      </div>
    </div>
  );
}
