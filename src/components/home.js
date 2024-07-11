// components/Home.js
import React from 'react';
import ProductCard from './productCard';
import Note from './images/note.jpeg';
import Pro from './images/pro.jpeg';
import Sam from './images/sam.jpeg';
import Bracelet from './images/bracelet.jpeg';
import Xiamo from './images/xiamo.jpeg';
import Motorola from './images/motorola.jpeg';
import LG from './images/LG.jpeg';
import Infinix from './images/infinix.jpeg';
import Itel from './images/itel.jpeg';
import Huawei from './images/huawei.jpeg';
import Google from './images/google.jpeg';

//import './Home.css'; // Import the CSS file

const products = [
  {
    image: Note,
    price: '850,000 UGX',
    name: 'Redmi Note 13 256GB (Mint Green)',
    description: '256GB Mint Green'
  },
  {
    image: Pro,
    price: '3,000,000 UGX',
    name: 'Iphone 15 pro max',
    description: '128GB storage'
  },
  {
    image: Sam,
    price: '450,000 UGX',
    name: 'Samsung Ultra 24-5G',
    description: '200MP Camera/20GB RAM'
  },
  {
    image: Bracelet,
    price: '6,000,000 UGX',
    name: 'Motorola Foldable',
    description: 'Made of organic plastic emitting diode'
  },
  {
    image: Xiamo,
    price: '700,000 UGX',
    name: 'Xiamo UK',
    description: 'Good space'
  },
  {
    image: Motorola,
    price: '500,000 UGX',
    name: 'Motorola Moto G200,5G',
    description: 'Good space and fair price'
  },
  {
    image: LG,
    price: '500,000 UGX',
    name: 'G4 Metallic 32GB',
    description: 'Metallic Gray'
  },
  {
    image: Infinix,
    price: '700,000 UGX',
    name: 'Infinix Hot 30 play',
    description: '128GB  + UPTO 16GBRAM'
  },
  {
    image: Itel,
    price: '300,000UGX',
    name: 'A70( 4GB  RAM,128 ROM)',
    description: 'Memory Fusion|13M Dual Rear'
  },
  {
    image: Huawei,
    price: '450,000 UGX',
    name: 'Huawei Nova 10SE',
    description: '8GB RAM/256ROM'
  },
  {
    image: Google,
    price: '650,000UGX',
    name: 'Google Pixel 8pro',
    description: '12GB RAM/128ROM'
  },
  
  
];

const Home = () => {
  return (
    <div className="home">
      <h2>Discover our latest products</h2>
      <h1>We deal in all kinds of phones and Japanese phones</h1>
      <div className="products">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            name={product.name}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
