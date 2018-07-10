import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';

const BakedImages = [
  {
    imageUrl:'/img/baked/chikalicious7551.jpg',
    name: 'Coffee cake muffin',
    id: 'Baked1',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 4,
    mCol: 6,
    smCol: 12,
    // secondaryImages: [
    //   {
    //     imageUrl:'/img/baked/chikalicious7552.jpg',
    //     name: 'Name1',
    //     id: 'Baked9',
    //     className: 'secondary-image'
    //   },
    // ],
  },

    {
      imageUrl:'/img/baked/chikalicious7494.jpg',
      name: 'Banana Pecan Muffin',
      id: 'Baked4',
      className: 'rectangle-image-grid',
      secondaryImageClassName: 'secondary-image',
      lCol: 4,
      mCol: 6,
      secondaryImages: [
        // {
        //   imageUrl:'/img/baked/chikalicious7496111.jpg',
        //   name: 'Name1',
        //   id: 'Baked4',
        //   className: 'secondary-image',
        //   secondaryImageClassName: 'secondary-image',
        // },
      ],
    },
  {
    imageUrl:'/img/baked/chikalicious7526.jpg',
    name: 'Roasted corn muffin',
    id: 'Baked7',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 4,
    mCol: 6,
    secondaryImages: [
      // {
      //   imageUrl:'/img/baked/chikalicious7527.jpg',
      //   name: 'Roasted corn muffin',
      //   id: 'Baked8',
      //   className: 'secondary-image',
      //   secondaryImageClassName: 'secondary-image',
      // },
    ],
  },





  {
    imageUrl:'img/baked/vanil-caramel02.jpg',

    name: 'Vanilla Custard, Salted Caramel Puff',
    id: 'Baked13',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 6,
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/baked/vanil-caramel01.jpg',
        name: 'Vanilla Custard, Salted Caramel Puff',
        id: 'Baked14',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/baked/greeentea_puff01 (1).jpg',
    name: 'Green Tea (Macha) Puff',
    id: 'Baked12',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 6,
    mCol: 6,
    secondaryImages: [
      // {
      //   imageUrl:'/img/baked/chikalicious7527.jpg',
      //   name: 'Roasted corn muffin',
      //   id: 'Baked8',
      //   className: 'secondary-image',
      //   secondaryImageClassName: 'secondary-image',
      // },
    ],
  },

  {
    imageUrl:'/img/baked/blk_sesame_puff11.jpg',
    name: 'Black Sesame Puff',
    id: 'Baked3',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 3,
    mCol: 6,
    secondaryImages: [
      // {
      //   imageUrl:'/img/baked/chikalicious7496111.jpg',
      //   name: 'Name1',
      //   id: 'Baked4',
      //   className: 'secondary-image',
      //   secondaryImageClassName: 'secondary-image',
      // },
    ],
  },


  {
    imageUrl:'/img/baked/croi1.jpg',
    name: 'Croissant',
    id: 'Baked5',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 3,
    mCol: 6,
  },
  {
    imageUrl:'/img/baked/horizontal-baked.jpg',
    name: 'Chocolate Kuigh Amann',
    id: 'Baked2',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 3,
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/baked/chikalicious7682.jpg',
        name: 'Chocolate Kuigh Amann',
        id: 'Baked13',
        secondaryImageClassName: 'secondary-image',
        className: 'secondary-image'
      },
      {
        imageUrl:'/img/baked/chikalicious7692.jpg',
        name: 'Chocolate Kuigh Amann',
        id: 'Baked15',
        secondaryImageClassName: 'secondary-image',
        className: 'secondary-image'
      },
    ],
  },
  {
    // imageUrl:'/img/baked/chikalicious7651.jpg',
    imageUrl:'/img/baked/chikalicious7702.jpg',
    name: 'Dark chocolate brownie',
    id: 'Baked33',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    lCol: 3,
    smCol: 12,
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/baked/chikalicious7640.jpg',
        name: 'Dark chocolate brownie',
        id: 'Baked10',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },

];


export default function Baked() {
  return (
    <div>
      <ImageGrid images={BakedImages} />
      <DessertNav />
    </div>
  );
}
