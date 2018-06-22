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
    brandImage: '/img/press/dandg.png',
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
    brandImage: '/img/press/ellebrand.png',
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
    brandImage: '/img/press/elle2brand.png',
    type: 'Magazine Article',
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
    name: 'K.W.Würtz + The opposite House Hotel',
    id: 'Press4',
    className: 'rectangle-image-grid',
    date: 2016,
    brandImage: '/img/press/swirebrand.png',
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
    imageUrl:'/img/press/tart-2.png',
    name: 'Strawberry cream tart',
    id: 'Press5',
    className: 'rectangle-image-grid',
    date: 2016,
    brandImage: '/img/press/chicalogo.png',
    type: 'collaboration',
    description: "Our tart for Chinese Valentine's Day",
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
