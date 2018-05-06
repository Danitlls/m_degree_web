import React from 'react';
import ImageGrid from './ImageGrid';

const CakesImages = [
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

export default function Cakes() {
  return (
    <div>
      <h1>Cakes!</h1>
      <ImageGrid images={CakesImages} />
    </div>
  );
}
