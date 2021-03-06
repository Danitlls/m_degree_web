import React from 'react';
import { Route } from 'react-router-dom'
import HomePageManager from './components/home/HomePageManager';
import About from './components/about/About';
import Header from './components/navigation/Header';
import Cakes from './components/desserts/cakes/Cakes';
import Baked from './components/desserts/baked/Baked';
import Plated from './components/desserts/plated/Plated';
import Press from './components/press/Press';

function applyHeaderFooter(Content) {
  return () => (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default function Routes() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={applyHeaderFooter(HomePageManager)}
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
