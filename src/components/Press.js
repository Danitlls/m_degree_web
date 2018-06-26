import React from 'react';
import './press.css';
import './pressGrid.css';
import PressGrid from './PressGrid';


const PressArticles = [
  {
    imageUrl:'/img/press/perfect-s-1.png',
    name: 'Perfect Strangers',
    id: 'Press7',
    className: 'rectangle-image-grid',
    date: 2018,
    brandImage: '/img/press/perfect-logo1.png',
    type: 'Magazine Article',
    description: '',
    country: 'San Francisco, USA',
    secondaryImages: [
      {
        imageUrl:'/img/press/perfect-s-2.png',
        name: 'Perfect Strangers',
        id: 'Press77',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/brick1.jpg',
    name: 'The Brick Hotel',
    id: 'Press5',
    className: 'rectangle-image-grid',
    date: 2018,
    brandImage: '/img/press/brick-brand.jpg',
    type: 'Collaboration',
    description: '6 hands dinner collaboration',
    country: 'Buenos Aires, Argentina',
    secondaryImages: [
      {
        imageUrl:'/img/press/The Brick menu-2.jpg',
        name: 'The Brick Kitchen',
        id: 'Press55',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/dolce-1.jpg',
    name: 'Dolce & Gabbana',
    id: 'Press1',
    className: 'rectangle-image-grid',
    date: 2018,
    brandImage: '/img/press/dandg.png',
    type: 'collaboration',
    description: '',
    country: 'China',
    secondaryImages: [
      {
        imageUrl:'/img/press/dolce-2.jpg',
        name: 'Dolce & Gabana',
        id: 'Press11',
        className: 'secondary-press-image'
      },
      {
        imageUrl:'/img/press/dolce3.jpg',
        name: 'Dolce & Gabana',
        id: 'Press112',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/elle-place-full.png',

    name: 'Elle Places',
    id: 'Press3',
    className: 'rectangle-image-grid',
    date: 2017,
    brandImage: '/img/press/elle2brand.png',
    type: 'Magazine Article',
    description: '',
    country: 'China',
    secondaryImages: [
      {
        imageUrl:'/img/press/2016-04cover.jpg',
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
    imageUrl:'/img/press/elle-dessert-png.jpg',
    name: 'Elle Decoration',
    id: 'Press2',
    className: 'rectangle-image-grid',
    date: 2017,
    brandImage: '/img/press/ELLE-DECOR-LOGO.gif',
    type: 'Magazine Article',
    description: '',
    country: 'China',
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
    imageUrl:'/img/press/Timeout SH-1.jpg',
    name: 'Time Out Magazine',
    id: 'Press1111',
    className: 'rectangle-image-grid',
    date: 2016,
    brandImage: '/img/press/timeout-logo.png',
    type: 'Magazine Article',
    description: "",
    country: 'Shanghai, China',
    secondaryImages: [
      {
        imageUrl:'/img/press/Timeout SH-2.jpg',
        name: 'Time Out Magazine',
        id: 'Press11112',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/IMG_1954.PNG',
    name: 'K.W.Würtz + The opposite House Hotel',
    id: 'Press4',
    className: 'rectangle-image-grid',
    date: 2016,
    brandImage: '/img/press/theophouse-logo.png',
    type: 'Artist & chefs collaboration',
    description: '',
    country: 'Beijing, China',
    secondaryImages: [
      {
        imageUrl:'/img/press/IMG_1953.png',
        name: 'K.W.Würtz + The opposite House Hotel',
        id: 'Press44',
        className: 'secondary-press-image'
      },
      {
        imageUrl:'img/press/IMG_0828.JPG',
        name: 'Artists',
        id: 'Press44',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/tart-2.png',
    name: 'Strawberry cream tart',
    id: 'Press8',
    className: 'rectangle-image-grid',
    date: 2016,
    brandImage: '/img/press/chicalogo.png',
    type: 'collaboration',
    description: "Our tart for Valentine's Day",
    country: 'China',
    secondaryImages: [
      {
        imageUrl:'/img/press/plated-8-png.png',
        name: 'Tart',
        id: 'Press88',
        className: 'secondary-press-image'
      },
    ],
  },
  {
    imageUrl:'/img/press/press-elle-men-1.jpg',
    name: 'Elle Men',
    id: 'Press222',
    className: 'rectangle-image-grid',
    date: 2016,
    brandImage: '/img/press/logo-elle-man.png',
    type: 'Magazine Article',
    description: "",
    country: 'Shanghai, China',
    secondaryImages: [
      {
        imageUrl:'/img/press/press-elle-men-2.jpg',
        name: 'Elle Men',
        id: 'Press22222',
        className: 'secondary-press-image'
      },
      {
        imageUrl:'/img/press/ElleMen SH-1.jpg',
        name: 'Elle Men',
        id: 'Press22223',
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
