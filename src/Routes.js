import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Cakes from './Cakes';
import Baked from './Baked';
import Plated from './Plated';
import Press from './Press';

function applyHeaderFooter(Content) {
  return () => (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default function Routes() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={applyHeaderFooter(Home)}
      />
      <Route
        exact
        path="/cakes"
        render={applyHeaderFooter(Cakes)}
      />
      <Route
        exact
        path="/baked"
        render={applyHeaderFooter(Baked)}
      />
      <Route
        exact
        path="/plated"
        render={applyHeaderFooter(Plated)}
      />
      <Route
        exact
        path="/press"
        render={applyHeaderFooter(Press)}
      />
      <Route
        exact
        path="/about"
        render={applyHeaderFooter(About)}
      />
    </div>
  );
}
