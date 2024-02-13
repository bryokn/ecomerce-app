import React, { useEffect, useState } from 'react';
import data from '../db.json';

function ProductCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data.liquors);
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <img src={product.image_url} alt={product.name} />
          <p>Type: {product.type}</p>
          <p>Brand: {product.brand}</p>
          <p>Volume: {product.volume_ml} ml</p>
          <p>Price: ${product.price_usd.toFixed(2)}</p>
          <p>Quantity: {product.quantity}</p>

        </div>
      ))}
    </div>
  );
}

export default ProductCatalog;
