import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {props.products.map((p, i) => (
          <ProductRow
            key={i}
            name={p.name}
            price={p.price}
            stocked={p.stocked}
          />
        ))}
      </tbody>
    </table>
  );
}
