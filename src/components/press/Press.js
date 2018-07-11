import React from "react";
import "./press.css";
import "./pressGrid.css";
import PressGrid from "./PressGrid";


const PressArticles = [
  {
    "imageUrl":"/img/press/perfect-s-1.png",
    "name": "Perfect Strangers",
    "id": "Press7",
    "className": "rectangle-image-grid",
    "date": 2018,
    "brandImage": "/img/press/perfect-logo1.JPG",
    "type": "Magazine Article",
    "description": "",
    "country": "San Francisco, USA",
    "coverPhoto": "/img/press/perfect-s-1cover.png",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/perfect-s-2.png",
        "name": "Perfect Strangers",
        "id": "Press77",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/dolce-1.jpg",
    "name": "Dolce & Gabbana",
    "id": "Press1",
    "className": "rectangle-image-grid",
    "date": 2018,
    "brandImage": "/img/press/dandg.png",
    "type": "collaboration",
    "description": "",
    "coverPhoto": "/img/press/dolce-1.jpg",
    "country": "China",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/dolce-2.jpg",
        "name": "Dolce & Gabana",
        "id": "Press11",
        "className": "secondary-press-image"
      },
      {
        "imageUrl":"/img/press/dolce3.jpg",
        "name": "Dolce & Gabana",
        "id": "Press112",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/elle-place-full.png",
    "name": "Elle Places",
    "id": "Press3",
    "className": "rectangle-image-grid",
    "date": 2017,
    "brandImage": "/img/press/elle2brand.png",
    "type": "Magazine Article",
    "description": "",
    "coverPhoto": "/img/press/elle-place-cover.jpg",
    "country": "China",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/2016-04cover.jpg",
        "name": "Elle Places",
        "id": "Press33",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/elle-dessert-png.jpg",
    "name": "Elle Decoration",
    "id": "Press2",
    "className": "rectangle-image-grid",
    "date": 2017,
    "brandImage": "/img/press/ELLE-DECOR-LOGO.gif",
    "type": "Magazine Article",
    "description": "",
    "country": "China",
    "coverPhoto": "/img/press/elle-dessert-png.jpg",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/elle-decoration-cover-PNG.png",
        "name": "Elle Decoration",
        "id": "Press22",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/sabor-1.jpg",
    "name": "Sabor",
    "id": "Press10",
    "className": "rectangle-image-grid",
    "date": 2016,
    "brandImage": "/img/press/sabor-brand1.jpg",
    "type": "Cooking Demostration",
    "description": "Dinner collaboration",
    "country": "Shanghai, China",
    "coverPhoto": "/img/press/sabor-cover.jpg",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/Sabor-2.png",
        "name": "Sabor",
        "id": "1012",
        "className": "secondary-press-image"
      },
      {
        "imageUrl":"/img/press/Sabor-3.png",
        "name": "Sabor",
        "id": "1013",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/Timeout SH-1.jpg",
    "name": "Time Out Magazine",
    "id": "Press5",
    "className": "rectangle-image-grid",
    "date": 2016,
    "brandImage": "/img/press/timeout-logo.png",
    "type": "Magazine Article",
    "description": "",
    "coverPhoto": "/img/press/timeout-cover.png",
    "country": "Shanghai, China",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/Timeout SH-2.jpg",
        "name": "Time Out Magazine",
        "id": "Press55",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/IMG_1954.PNG",
    "name": "K.W.Würtz, Mauro & Maya at The opposite House Hotel",
    "id": "Press4",
    "className": "rectangle-image-grid",
    "date": 2017,
    "brandImage": "/img/press/theophouse-logo.png",
    "type": "Artist & chefs collaboration",
    "description": "“We love to present new and interesting events to the Beijing community,” says Mark Passmore, General Manager of The Opposite House. “We are very excited to host Mauro & Maya x K.H. Würtz pop-up, where the beautifully crafted desserts work in concert with timelessly designed plates, making it a perfect fit towards our hotel’s core of providing quality and unique experiences”.",
    "country": "Beijing, China",
    "coverPhoto": "/img/press/IMG_1954.PNG",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/IMG_1953.png",
        "name": "K.W.Würtz + The opposite House Hotel",
        "id": "Press44",
        "className": "secondary-press-image"
      },
      {
        "imageUrl":"img/press/IMG_0828.JPG",
        "name": "Artists",
        "id": "Press44",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/tart-2.png",
    "name": "Strawberry cream tart",
    "id": "Press8",
    "className": "rectangle-image-grid",
    "date": 2016,
    "brandImage": "/img/press/chicalogo.png",
    "type": "collaboration",
    "description": "Our tart for Valentine's Day",
    "coverPhoto": "/img/press/tart-2.png",
    "country": "China",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/plated-8-png.png",
        "name": "Tart",
        "id": "Press88",
        "className": "secondary-press-image"
      }
    ]
  },
  {
    "imageUrl":"/img/press/press-elle-men-1.jpg",
    "name": "Elle Men",
    "id": "Press15",
    "className": "rectangle-image-grid",
    "date": 2016,
    "brandImage": "/img/press/logo-elle-man.png",
    "type": "Magazine Article",
    "description": "",
    "coverPhoto": "/img/press/press-elle-men-1.jpg",
    "country": "Shanghai, China",
    "secondaryImages": [
      {
        "imageUrl":"/img/press/ElleMen SH-1.jpg",
        "name": "Elle Men",
        "id": "Press115",
        "className": "secondary-press-image"
      },
      {
        "imageUrl":"/img/press/press-elle-men-2.jpg",
        "name": "Elle Men",
        "id": "Press1155",
        "className": "secondary-press-image"
      },
    ]
  }
];

export default function Press() {
  return (
    <div className="press">
      <PressGrid images={PressArticles} />
    </div>
  );
}
