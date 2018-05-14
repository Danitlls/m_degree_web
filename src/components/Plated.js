import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';


const PlatedImages = [
  {
    imageUrl:'/img/plated/GAI_1206.jpg',
    name: 'Amaranth-Oolong-Sweet potato',
    id: 'plated1',
    className: 'rectangle-image-grid',
    description: 'Puffed amaranth tuile, milky oolong tea cream, sweet potato sorbet and chips with lemon-tequila agar agar',
    mCol: 6,
    smCol: 12,
    lCol: 4,
    secondaryImages: [
      {
        imageUrl:'/img/plated/plated-5.jpg',
        name: 'Amaranth-Oolong-Sweet potato',
        id: 'plated2',
        className: 'secondary-image'
      },
    ],
  },
  {
    imageUrl:'/img/plated/DSCF0322.jpg',
    name: 'Green tea Matcha Tiramisu',
    id: 'plated3',
    className: 'rectangle-image-grid',
    mCol: 3,
    lCol: 4,
  },
  {
    imageUrl:'/img/plated/GAI_1146-2.jpg',
    name: 'Beets-Strawberry-Yogurt',
    id: 'plated4',
    className: 'rectangle-image-grid',
    description: 'Balsamic glaze compressed beet, wild strawberry sheets, mousse and sorbet with yogurt foam',
    mCol: 3,
    lCol: 4,

  },
  {
    imageUrl:'/img/plated/DSCF1887.jpg',
    name: 'Latitude of Chocolate',
    id: 'plated5',
    className: 'rectangle-image-grid',
    description: '32%-35%-40%-66% with dulcey chocolate cake and yuzu sorbet',
    mCol: 3,
    lCol: 6,
  },

  {
    imageUrl:'/img/plated/plated-7.jpg',
    name: 'Watermelon-Mint-Lemon',
    id: 'plated6',
    className: 'rectangle-image-grid',
    description: 'Fresh summer watermelon compressed with mint and consommé with Lemon sorbet',
    mCol: 3,
    lCol: 3,
  },
  {
    imageUrl:'/img/plated/DSCF1850.jpg',
    name: 'Pineapple-Apple-Basil',
    id: 'plated7',
    className: 'rectangle-image-grid',
    description: 'Pineapple compressed and granita, apple compressed and sorbet, with lemon and basil gel',
    mCol: 3,
    lCol: 3,
  },

  {
    imageUrl:'/img/plated/plated-6.jpg',
    name: 'Honey dew-Yogurt-Mint',
    id: 'plated8',
    className: 'rectangle-image-grid',
    description: 'Yogurt panna cotta, honeydew melon compressed and sorbet with mint vei',
    mCol: 3,
    lCol: 3,

  },
  {
    imageUrl:'/img/plated/DSCF1899.jpg',
    name: 'Carrot-Brown sugar-Lemon',
    id: 'plated9',
    className: 'rectangle-image-grid',
    description: 'Orange glazed compressed carrot, brown sugar panna cotta, orange yuzu agar agar, and lemonade sorbet',
    mCol: 6,
    smCol: 12,
    lCol: 3,
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
