import React from 'react';
import PageManager from '../page/PageManager';
import DessertNav from '../../navigation/DessertNav';
import PlatedImaged from '../baked/baked.json';
// import PlatedImaged from './plated.json';

export default function Plated() {
  return (
    <div>
      <PageManager images={PlatedImaged} />
      <DessertNav />
    </div>
  );
}
