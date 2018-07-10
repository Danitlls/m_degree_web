import React from 'react';
import PageManager from '../page/PageManager';
import DessertNav from '../../navigation/DessertNav';
import BakedImages from './baked.json';

export default function Baked() {
  return (
    <div>
      <PageManager images={BakedImages} />
      <DessertNav />
    </div>
  );
}
