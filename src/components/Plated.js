import React from 'react';

import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';


const PlatedImages = [
  {
    imageUrl:'/img/plated/GAI_1206.jpg',
    name: 'Name1',
    id: 'Something1',
    className: 'rectangle-image-grid',
    secondaryImages: [
      {
        imageUrl:'/img/plated/GAI_1210.jpg',
        name: 'Name1',
        id: 'Something2',
        className: 'secondary-image'
      },
      {
        imageUrl:'/img/plated/GAI_1210.jpg',
        name: 'Name1',
        id: 'Something2',
        className: 'secondary-image'
      }
    ],
  },
  {
    imageUrl:'/img/plated/DSCF0322.jpg',
    name: 'Name1',
    id: 'Something2',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/plated/DSCF1850.jpg',
    name: 'Name1',
    id: 'Something3',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/plated/DSCF1887.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/plated/GAI_1146-2.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid'
  },
  {
    imageUrl:'/img/plated/DSCF1899.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid'
  },
];


export default function Plated() {
  return (
    <div>
      <ImageGrid images={PlatedImages} />
      <DessertNav />
    </div>
  );
}
