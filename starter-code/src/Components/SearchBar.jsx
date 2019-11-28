import React from 'react';

export default function SearchBar(props) {
  console.log(props);
  return (
    <form onChange={props.clbk}>
      <div>
        Search
        <input type="text" />
      </div>
      <div>
        <input type="checkbox" />
        Only show products on stock
      </div>
    </form>
  );
}
