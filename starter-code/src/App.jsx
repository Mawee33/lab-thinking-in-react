import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
import products from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={products.data} />
      </div>
    );
  }
}
