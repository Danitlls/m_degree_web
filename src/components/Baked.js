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
    imageUrl:'/img/baked/chikalicious7668.jpg',
    name: 'Chocolate Kuigh Amann',
    id: 'Baked2',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/baked/chikalicious7663.jpg',
        name: 'Chocolate Kuigh Amann',
        id: 'Baked13',
        secondaryImageClassName: 'secondary-image',
        className: 'secondary-image'
      },
    ],
  },
  {
    imageUrl:'/img/baked/chikalicious7494.jpg',
    name: 'Banana Pecan Muffin',
    id: 'Baked3',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
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
    imageUrl:'/img/baked/baked-main.jpg',
    name: 'Muffins',
    id: 'Baked5',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
  },
  {
    imageUrl:'/img/baked/chikalicious7526.jpg',
    name: 'Roasted corn muffin',
    id: 'Baked7',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
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
    imageUrl:'/img/baked/chikalicious7651.jpg',
    name: 'Dark chocolate brownie',
    id: 'Baked4',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
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
      {
        imageUrl:'/img/baked/chikalicious7646.jpg',
        name: 'Dark chocolate brownie',
        id: 'Baked11',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
      // {
      //   imageUrl:'/img/baked/chikalicious7658.jpg',
      //   name: 'Dark chocolate brownie',
      //   id: 'Baked12',
      //   className: 'secondary-image'
      // },
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
