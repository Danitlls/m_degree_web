import React from 'react';
import Home from './Home';
import HomeIntro from '../intro/HomeIntro';

export default function HomePageManager() {
  let HomePage;
  if (window.sessionStorage.getItem('m_intro')) {
    HomePage = (<Home />);
  } else {
    HomePage = (<HomeIntro><Home/></HomeIntro>);
    window.sessionStorage.setItem('m_intro', true);
  }
  return HomePage;
}
