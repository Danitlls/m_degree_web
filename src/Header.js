import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/baked">Baked</Link>
      <br />
      <Link to="/cakes">Cakes</Link>
      <br />
      <Link to="/plated">Plated</Link>
      <br />
      <Link to="/press">Press</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}
