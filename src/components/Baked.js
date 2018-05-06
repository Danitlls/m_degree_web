import React from 'react';
import ImageGrid from './ImageGrid';

const BakedImages = [
  {
    imageUrl:'/DSCF0322 2.jpg',
    name: 'Name1',
    id: 'Something1',
  },
  {
    imageUrl:'/DSCF0322 2.jpg',
    name: 'Name1',
    id: 'Something2',
  },
  {
    imageUrl:'/DSCF0322 2.jpg',
    name: 'Name1',
    id: 'Something3',
  },
  {
    imageUrl:'/DSCF1887.jpg',
    name: 'Name1',
    id: 'Something4',
  },
];


export default function Baked() {
  return (
    <div>
      <h1>Baked!</h1>
      <ImageGrid images={BakedImages} />
    </div>
  );
}
