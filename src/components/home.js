// components/Home.js
import React from 'react';
import ProductCard from './productCard';
//import './Home.css'; // Import the CSS file

const products = [
  {
    image: '/path/to/image1.png',
    price: '850,000 UGX',
    name: 'Redmi Note 13 256GB (Mint Green)',
    description: ''
  },
  {
    image: '/path/to/image2.png',
    price: '150,000 UGX',
    name: 'Apple Pencil Tips - 4 Pack',
    description: ''
  },
  {
    image: '/path/to/image3.png',
    price: '450,000 UGX',
    name: 'Apple Pencil (2nd Generation)',
    description: ''
  },
  {
    image: '/path/to/image4.png',
    price: '180,000 UGX',
    name: 'Green Lion 4 in 1 Wireless Charging Station 15W',
    description: ''
  }
];

const Home = () => {
  return (
    <div className="home">
      <h2>Discover our latest products</h2>
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
