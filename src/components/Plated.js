import React from 'react';
import { Col , Card, Row } from 'react-materialize';
import ImageGrid from './ImageGrid';

const PlatedImages = [
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

export default function Plated() {
  return (
    <div>
      <div>
        <h1>Plated!</h1>
      </div>
      <ImageGrid images={PlatedImages} />
    </div>
  );
}
