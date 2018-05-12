import React from 'react';
import './press.css';
import PressGrid from './PressGrid';


const PressArticles = [
  {
    imageUrl:'/img/press/elle.png',
    name: 'Elle Decoration',
    id: 'Something1',
    className: 'rectangle-image-grid',
    date: 2017,
    type: 'Press',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/elle-place-full.png',
        name: 'Name1',
        id: 'Something2-1',
        className: 'secondary-image'
      },
      {
        imageUrl:'/img/press/elle-place.png',
        name: 'Name1',
        id: 'Something2',
        className: 'secondary-image'
      }
    ],
  },
  {
    imageUrl:'/img/press/elle-place.png',
    name: 'Elle Places',
    id: 'Something2',
    className: 'rectangle-image-grid',
    date: 2017,
    type: 'Press',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/elle-place-full.png',
        name: 'Name1',
        id: 'Something2-1',
        className: 'secondary-image'
      },
      {
        imageUrl:'/img/press/elle-place.png',
        name: 'Name1',
        id: 'Something2',
        className: 'secondary-image'
      }
    ],

  },
  {
    imageUrl:'/img/press/swire.png',
    name: 'Swire Hotels',
    id: 'Something3',
    className: 'rectangle-image-grid',
    date: 2016,
    type: 'Press',
    description: 'This is the description of the press or collaboration',
    secondaryImages: [
      {
        imageUrl:'/img/press/elle-place-full.png',
        name: 'Name1',
        id: 'Something2-1',
        className: 'secondary-image'
      },
      {
        imageUrl:'/img/press/elle-place.png',
        name: 'Name1',
        id: 'Something2',
        className: 'secondary-image'
      }
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
