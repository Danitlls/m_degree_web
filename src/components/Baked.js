import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';

const BakedImages = [
  {
    imageUrl:'/img/baked/chikalicious7552.jpg',
    name: 'Name1',
    id: 'Something1',
    className: 'rectangle-image-grid',
    mCol: 4,
    smCol: 12,

  },
  {
    imageUrl:'/img/baked/chikalicious7668.jpg',
    name: 'Name1',
    id: 'Something2',
    className: 'rectangle-image-grid',
    mCol: 6,
  },
  {
    imageUrl:'/img/baked/chikalicious7496111.jpg',
    name: 'Name1',
    id: 'Something3',
    className: 'rectangle-image-grid',
    mCol: 2,
  },
  {
    imageUrl:'/img/baked/chikalicious7566.jpg',
    name: 'Name1',
    id: 'Something5',
    className: 'rectangle-image-grid',
    mCol: 3,
  },
  {
    imageUrl:'/img/baked/chikalicious7526.jpg',
    name: 'Name1',
    id: 'Something6',
    className: 'rectangle-image-grid',
    mCol: 3,
  },

  {
    imageUrl:'/img/baked/chikalicious7651.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid',
    smCol: 12,
    mCol: 6,
  },


];


export default function Baked() {
  return (
    <div>
      <ImageGrid images={BakedImages} />
      <DessertNav />
    </div>
  );
}
