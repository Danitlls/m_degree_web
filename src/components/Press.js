import React from 'react';
import './press.css';
import PressGrid from './PressGrid';


const PressArticles = [
  {
    imageUrl:'/img/press/dolce-1.jpg',
    name: 'Dolce & Gabbana',
    id: 'Press1',
    className: 'rectangle-image-grid',
    date: 2018,
    type: 'collaboration',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/dolce-2.jpg',
        name: 'Dolce & Gabana',
        id: 'Press11',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/elle-dessert-png.jpg',
    name: 'Elle Decoration',
    id: 'Press2',
    className: 'rectangle-image-grid',
    date: 2017,
    type: 'Magazine Article',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/elle-decoration-cover-PNG.png',
        name: 'Name1',
        id: 'Press22',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/elle-2.jpg',
    name: 'Elle Places',
    id: 'Press3',
    className: 'rectangle-image-grid',
    date: 2017,
    type: 'Press',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/elle-place-full.png',
        name: 'Elle Places',
        id: 'Press33',
        className: 'secondary-press-image'
      },
      // {
      //   imageUrl:'/img/press/cake-elle.jpg',
      //   name: 'Elle Places',
      //   id: 'Press333',
      //   className: 'secondary-press-image'
      // },
    ],

  },
  {
    imageUrl:'/img/press/swire-1.jpg',
    name: 'Swire Hotels',
    id: 'Press4',
    className: 'rectangle-image-grid',
    date: 2016,
    type: 'collaboration',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/swire-hotel-jpg.jpg',
        name: 'Swire Hotels',
        id: 'Press44',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/tart-2.jpg',
    name: 'Strawberry cream tart',
    id: 'Press5',
    className: 'rectangle-image-grid',
    date: 2016,
    type: 'collaboration',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/plated-8-png.png',
        name: 'Tart',
        id: 'Press55',
        className: 'secondary-press-image'
      },
    ],
  },
];

export default function Press() {
  return (
    <div className="press">

      <PressGrid images={PressArticles} />
    </div>
  );
}
