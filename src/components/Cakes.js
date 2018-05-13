import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';

const CakesImages = [
  {
    imageUrl:'/img/cakes/IMG_7182.JPG',
    name: 'Name1',
    id: 'Something1',
    className: 'rectangle-image-grid',
    mCol: 3,
    smCol: 12,
  },
  {
    imageUrl:'/img/cakes/IMG_7225.JPG',
    name: 'Name1',
    id: 'Something2',
    className: 'rectangle-image-grid',
    mCol: 6,
  },
  {
    imageUrl:'/img/cakes/IMG_7227.JPG',
    name: 'Name1',
    id: 'Something3',
    className: 'rectangle-image-grid',
    mCol: 3,
  },
  {
    imageUrl:'/img/cakes/IMG_7233.JPG',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid',
    mCol: 3,
  },
  {
    imageUrl:'/img/cakes/IMG_7237.JPG',
    name: 'Name1',
    id: 'Something5',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/cakes/IMG_7230.JPG',
    name: 'Name1',
    id: 'Something6',
    className: 'rectangle-image-grid',
    mCol: 4,
    smCol: 12,
  },

];

export default function Cakes() {
  return (
    <div>
      <ImageGrid images={CakesImages} />
      <DessertNav />
    </div>
  );
}
