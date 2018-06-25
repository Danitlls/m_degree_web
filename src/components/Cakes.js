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
    imageUrl:'/img/cakes/yuzu_pist02 (1).jpg',
    name: 'Yuzu Pistachio Cake',
    id: 'cake2',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/yuzu_pist01 (1).jpg',
        name: 'Yuzu Pistachio Cake',
        id: 'cake22',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/darkchoc_coffee01.jpg',
    name: 'Caraibe (66%) - Maple - Pecan',
    id: 'cake8',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/darkchoc_coffee02.jpg',
        name: 'Caraibe (66%) - Maple - Pecan',
        id: 'cake88',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/straw_toltea01.jpg',
    name: 'Strawberry - Mascarpone - Lemon',
    id: 'cake3',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
  },
  {
    imageUrl:'/img/cakes/chikalicious7169-2.jpg',
    name: 'VANILLA - Caramel Mille Feuille',
    id: 'cake7',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/chikalicious7171.jpg',
        name: 'VANILLA - Caramel Mille Feuille',
        id: 'cake77',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },

  {
    imageUrl:'/img/cakes/GT_chestnut_03.jpg',
    name: 'Green Tea - Chestnut - Cassis',
    id: 'cake1',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Dark chocolate, coffee, dulce de leche and hazelnut',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/GT_chestnut_02.jpg',
        name: 'Green Tea - Chestnut - Cassis',
        id: 'cake11',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
      {
        imageUrl:'/img/cakes/GT_chestnut_01.jpg',
        name: 'Green Tea - Chestnut - Cassis',
        id: 'cake111',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/STDchoc_coffee_nut02.jpg',
    name: 'Santo Domingo (70%) Chocolate - Hazelnut Praline - Coffee',
    id: 'cake5',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    secondaryImages: [
      {
        imageUrl:'/img/cakes/STDchoc_coffee_nut01.jpg',
        name: 'Santo Domingo (70%) Chocolate - Hazelnut Praline - Coffee',
        id: 'cake55',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },

  {
    imageUrl:'/img/cakes/mango_rice02.jpg',
    name: 'Mango - Jasmin - Rice',
    id: 'cake9',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/mango_rice01.jpg',
        name: 'Mango - Jasmin - Rice',
        id: 'cake99',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
      {
        imageUrl:'/img/cakes/mango_rice03.jpg',
        name: 'Mango - Jasmin - Rice',
        id: 'cake99',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/tiramisu01.jpg',
    name: 'Tiramisu with Amaretto-Coffee Agar Agar',
    id: 'cake4',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/tiramisu03.jpg',
        name: 'Tiramisu with Amaretto-Coffee Agar Agar',
        id: 'cake44',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },



  {
    imageUrl:'/img/cakes/PBJ01.jpg',
    name: 'PBJ - Peanut Butter - Blueberry - Lemon',
    id: 'cake12',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/PBJ02.jpg',
        name: 'PBJ - Peanut Butter - Blueberry - Lemon',
        id: 'cake122',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/milkchoc_nuts02.jpg',
    name: 'Jivara Milk Chocolate - Praline',
    id: 'cake13',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/milkchoc_nuts01.jpg',
        name: 'Jivara Milk Chocolate - Praline',
        id: 'cake133',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/cakes01.jpg',
    name: 'Our Cakes',
    id: 'cake14',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/cakes02.jpg',
        name: 'Our Cakes',
        id: 'cake144',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
  },
  {
    imageUrl:'/img/cakes/EG_rasp01.jpg',
    name: 'Earl Grey - White Chocolate - Raspberry',
    id: 'cake6',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    mCol: 6,
    secondaryImages: [
      {
        imageUrl:'/img/cakes/EG_rasp02.jpg',
        name: 'Earl Grey - White Chocolate - Raspberry',
        id: 'cake66',
        className: 'secondary-image',
        secondaryImageClassName: 'secondary-image',
      },
    ],
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
