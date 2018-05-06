import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Cakes from './components/Cakes';
import Baked from './components/Baked';
import Plated from './components/Plated';
import Press from './components/Press';

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
