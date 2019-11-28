import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = { products: [...this.props.products] };

  filterProducts = e => {
    const searchQuery = e.target.value;

    const filteredArray = this.props.products.filter(eachV => {
      return eachV.name.toUpperCase().includes(searchQuery.toUpperCase());
    });

    this.setState({ products: filteredArray });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar clbk={this.filterProducts} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
