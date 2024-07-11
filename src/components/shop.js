// components/Shop.js
import React, { useState } from 'react';
import Iphone from './images/iphone.jpeg';
import Bionic2 from './images/bionic.jpeg';
import Galaxy  from './images/galaxy.jpeg';
import Ultra from './images/ultra.jpeg';
import Fold from './images/fold.jpeg';
import Google from './images/google.jpeg';
import Huawei from './images/huawei.jpeg';
import Infinix from './images/infinix.jpeg';
import Itel from './images/itel.jpeg';
import LG from './images/LG.jpeg';
import Motorola from './images/motorola.jpeg';
import Nokia from './images/nokia.jpeg';
import Oppo from './images/oppo.jpeg';
import Realmi from './images/realmi.jpeg';
import Redmi from './images/redmi.jpeg';
import Xiamo from './images/xiamo.jpeg';
const products = [
    {
        image: Iphone,
        price: '4,300,000 UGX',
        name: 'Iphone 15 pro max',
        description: ''
      },
      {
        image: Bionic2,
        price: '4,300,000 UGX',
        name: 'Bionic 15 pro max',
        description: ''
      },
  {
    image: Galaxy,
    price: '2,000,000 UGX',
    name: 'Galaxy S series',
    description: '12GB RAM/512GM ROM'
  },
  {
    image: Ultra,
    price: '180,000 UGX',
    name: 'Galaxy Ultra S23',
    description: '12GB RAM/512GB ROM'
  },
  {
    image: Fold,
    price: '180,000 UGX',
    name: 'Samsung Galaxy Z fold',
    description: '12GB RAM/512 ROM'
  },
  {
    image: Nokia,
    price: '180,000 UGX',
    name: '2GB RAM,32 ROM',
    description: 'Dual sim'
  },
  {
    image: Realmi,
    price: '180,000 UGX',
    name: 'Realmi India',
    description: '8GB RAM'
  },
  {
    image: Redmi,
    price: '180,000 UGX',
    name: 'Redmi 10',
    description: 'Fair Price'
  },
  {
    image: Oppo,
    price: '180,000 UGX',
    name: 'DXOMARK',
    description: '8GB RAM '
  },
  {
    image: Xiamo,
    price: '180,000 UGX',
    name: 'Xiamo UK',
    description: 'Good space'
  },
  {
    image: Motorola,
    price: '180,000 UGX',
    name: 'Motorola Moto G200,5G',
    description: 'Good space and fair price'
  },
  {
    image: LG,
    price: '180,000 UGX',
    name: 'G4 Metallic 32GB',
    description: 'Metallic Gray'
  },
  {
    image: Infinix,
    price: '180,000 UGX',
    name: 'Infinix Hot 30 play',
    description: '128GB  + UPTO 16GBRAM'
  },
  {
    image: Itel,
    price: '180,000 UGX',
    name: 'A70( 4GB  RAM,128 ROM)',
    description: 'Memory Fusion|13M Dual Rear'
  },
  {
    image: Huawei,
    price: '180,000 UGX',
    name: 'Huawei Nova 10SE',
    description: '8GB RAM/256ROM'
  },
  {
    image: Google,
    price: '180,000 UGX',
    name: 'Google Pixel 8pro',
    description: '12GB RAM/128ROM'
  },
  
  
  
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="shop-header">
        <h2>Our Products</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
