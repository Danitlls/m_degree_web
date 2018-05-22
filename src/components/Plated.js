import React from 'react';
import ImageGrid from './ImageGrid';
import DessertNav from './DessertNav';


const PlatedImages = [
  {
    imageUrl:'/img/plated/GAI_1206.jpg',
    name: 'Amaranth-Oolong-Sweet potato',
    id: 'plated1',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Puffed amaranth tuile, milky oolong tea cream, sweet potato sorbet and chips with lemon-tequila agar agar',
    secondaryImages: [
      {
        imageUrl:'/img/plated/plated-5.jpg',
        name: 'Amaranth-Oolong-Sweet potato',
        id: 'plated2',
        secondaryImageClassName: 'secondary-image',
        className: ' secondary-image'
      },
    ],
  },
  {
    imageUrl:'/img/plated/DSCF0322.jpg',
    name: 'Green tea Matcha Tiramisu',
    id: 'plated3',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
  },
  {
    imageUrl:'/img/plated/GAI_1146-2.jpg',
    name: 'Beets-Strawberry-Yogurt',
    id: 'plated4',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Balsamic glaze compressed beet, wild strawberry sheets, mousse and sorbet with yogurt foam',
  },
  {
    imageUrl:'/img/plated/DSCF1887.jpg',
    name: 'Latitude of Chocolate',
    id: 'plated5',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: '32%-35%-40%-66% with dulcey chocolate cake and yuzu sorbet',
  },

  {
    imageUrl:'/img/plated/plated-7.jpg',
    name: 'Watermelon-Mint-Lemon',
    id: 'plated6',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Fresh summer watermelon compressed with mint and consommé with Lemon sorbet',
  },
  {
    imageUrl:'/img/plated/DSCF1850.jpg',
    name: 'Pineapple-Apple-Basil',
    id: 'plated7',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Pineapple compressed and granita, apple compressed and sorbet, with lemon and basil gel',
  },

  {
    imageUrl:'/img/plated/plated-6.jpg',
    name: 'Honey dew-Yogurt-Mint',
    id: 'plated8',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Yogurt panna cotta, honeydew melon compressed and sorbet with mint vei',
  },
  {
    imageUrl:'/img/plated/DSCF1899.jpg',
    name: 'Carrot-Brown sugar-Lemon',
    id: 'plated9',
    className: 'rectangle-image-grid',
    secondaryImageClassName: 'secondary-image',
    description: 'Orange glazed compressed carrot, brown sugar panna cotta, orange yuzu agar agar, and lemonade sorbet',
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
