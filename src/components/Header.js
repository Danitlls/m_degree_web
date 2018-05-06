import React from 'react';
import { Navbar, NavItem} from 'react-materialize';
import './header.css';

export default function Header() {
  return (
    <div>
    <Navbar right className="mdegree-nav">
      <NavItem className="mdegree-logo" href='/'>
        <img src="http://via.placeholder.com/100x100" />
      </NavItem>
      <NavItem href='/about' className="nav-text-color">About & Contact Us</NavItem>
      <NavItem href='/press' className="nav-text-color">Press & Collaborations</NavItem>
      <NavItem href='/cakes' className="hide-on-med-and-up">Cakes</NavItem>
      <NavItem href='/plated' className="hide-on-med-and-up">Plated Desserts</NavItem>
      <NavItem href='/baked' className="hide-on-med-and-up">Baked</NavItem>
    </Navbar>
    </div>
  );
}
