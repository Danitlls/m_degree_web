import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';

const BakedImages = [
  {
    imageUrl:'/img/baked/chikalicious7566.jpg',
    name: 'Name1',
    id: 'Something1',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/baked/chikalicious7668.jpg',
    name: 'Name1',
    id: 'Something2',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/baked/chikalicious7651.jpg',
    name: 'Name1',
    id: 'Something3',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/baked/chikalicious7527.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/baked/chikalicious7552.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/baked/chikalicious7496111.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid'
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
