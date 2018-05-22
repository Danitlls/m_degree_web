import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';
// - N. 7214 (Strawberry cream tart)
// ---- N. 3810 (Strawberry short cake)
// ----- N. 3849 (Cheese cake-cassis- lemon)
// ----- N. 3860 (White chocolate earl grey mousse with raspberry gelee)
// ----- N. 3879 (Santo Domingo dark chocolate - coffee- dulce the leche- hazelnut)
// ----- N. 3840 (Belgium dark chocolate cake)
const CakesImages = [
  {
    imageUrl:'/img/cakes/IMG_7182.JPG',
    name: 'Santo Domingo ',
    id: 'cake1',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Dark chocolate, coffee, dulce de leche and hazelnut',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/IMG_7222.JPG',
        name: 'Santo Domingo',
        id: 'cake11',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/IMG_7230.JPG',
    name: 'Carrot Cake',
    id: 'cake6',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
  },
  {
    imageUrl:'/img/cakes/DSCF3798.jpg',
    name: 'Strawberry short cake',
    id: 'cake3',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/IMG_7227.JPG',
        name: 'Cheese cake-cassis- lemon',
        id: 'cake33',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/IMG_7237.JPG',
    name: 'White chocolate earl grey mousse with raspberry gelee',
    id: 'cake5',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    secondaryImages: [
      {
        imageUrl:'/img/cakes/IMG_7238.JPG',
        name: 'Cheese cake-cassis- lemon',
        id: 'cake55',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/IMG_7233.JPG',
    name: 'Belgium dark chocolate cake',
    id: 'cake4',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
  },
  {
    imageUrl:'/img/cakes/IMG_7225.JPG',
    name: 'Cheese cake-cassis-lemon',
    id: 'cake2',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/IMG_7235.JPG',
        name: 'Cheese cake-cassis- lemon',
        id: 'cake22',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  }


];

export default function Cakes() {
  return (
    <div>
      <ImageGrid images={CakesImages} />
      <DessertNav />
    </div>
  );
}
