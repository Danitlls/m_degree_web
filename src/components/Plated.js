import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';


const PlatedImages = [
  {
    imageUrl:'/img/plated/GAI_1206.jpg',
    name: 'Name1',
    id: 'Something1',
    className: 'rectangle-image-grid',
    mCol: 7,
    smCol: 12,
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
        id: 'Something3',
        className: 'secondary-image'
      }
    ],
  },
  {
    imageUrl:'/img/plated/DSCF0322.jpg',
    name: 'Name1',
    id: 'Something4',
    className: 'rectangle-image-grid',
    mCol: 4,
  },
  {
    imageUrl:'/img/plated/DSCF1850.jpg',
    name: 'Name1',
    id: 'Something5',
    className: 'rectangle-image-grid',
    mCol: 3,

  },
  {
    imageUrl:'/img/plated/DSCF1887.jpg',
    name: 'Name1',
    id: 'Something6',
    className: 'rectangle-image-grid',
    mCol: 4,
  },
  {
    imageUrl:'/img/plated/GAI_1146-2.jpg',
    name: 'Name1',
    id: 'Something7',
    className: 'rectangle-image-grid',
    mCol: 4,

  },
  {
    imageUrl:'/img/plated/DSCF1899.jpg',
    name: 'Name1',
    id: 'Something8',
    className: 'rectangle-image-grid',
    mCol: 4,
    smCol: 12,

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
