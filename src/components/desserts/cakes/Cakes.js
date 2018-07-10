import React from 'react';
import PageManager from '../page/PageManager';
import DessertNav from '../../navigation/DessertNav';
import CakesImages from '../baked/baked.json';
// import CakesImages from './cakes.json';

export default function Cakes() {
  return (
    <div>
      <PageManager images={CakesImages} />
      <DessertNav />
    </div>
  );
}
