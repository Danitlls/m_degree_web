import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="right-photo">
        <img  src="/img/maya.png" />
      </div>
      <div className="left-photo">
        <img  src="/img/mauro-final.png" />
      </div>
      <div className="text-container">
        <h2>Who We Are</h2>
        <p>
        M Degree was founded by a chef couple, Eugenio Mauro Pompili and Manunya (Maya) Sittisuntorn, who coincidentally met while working in the fine dinning industry in New York City. An extensive ChikaLicious expansion project in 2015 led them to joined hands to brave the new world together in Asia.
        </p>
        <p>
        The diverse backgrounds brought Mauro (from Argentina) and Maya (from Thailand, raised in the U.S.) together to express their work in a different way. His exposure of high-level professional experience in pastry and her unique perspective as a well-trained designer allowed them to pay attention to the finer details. The chef couple balance and blend their visions together onto their desserts and the experience around it. They believe in the beauty of simplicity. The talented duo focuses on the freshness of the seasonal ingredients. They let the ingredients speak.
        </p>
        <p>
        In M Degree, Mauro and Maya offers a unique consulting service dedicated specially in pastry for restaurants,  hotels, pastry shops and collaboration events around the world with only one goal in mind,<br/><strong>a sweet experience.</strong>
        </p>
      </div>
      <div className="contact-container">
        <a href="mailto:mauro-maya@mmdegree.com"><img src="/img/new-email-outline-symbol-in-black-circular-button.svg"/></a>
        <a href="https://www.instagram.com/mdegree.mauromaya" target="_blank" ><img src="/img/instagram-logo.svg"/></a>
        <a href="https://www.facebook.com/mmdegree" target="_blank" ><img src="/img/facebook-logo-button.svg"/></a>
      </div>
      <h1 className="hiddenMM">A Sweet Experience, pastry consultant and colaborations</h1>
    </div>
  );
}
