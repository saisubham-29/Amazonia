import React from 'react';
import './popular.css'; 
import data_product from '../assets/data';
import Item from '../Item/Item'; 

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In women</h1>
      <hr />
      <div className="popular-item"> 
        {data_product.map((Product, i) => (
          <Item
            key={i}
            id={Product.id}
            name={Product.name}
            image={Product.image}
            new_price={Product.new_price}
            old_price={Product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
