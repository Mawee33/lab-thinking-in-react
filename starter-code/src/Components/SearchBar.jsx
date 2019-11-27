import React, { Component } from 'react';

export class SearchBar extends Component {
  state = { products: this.props.products };
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  render() {
    return (
      <form onChange={this.handleChange}>
        <div>
          Search
          <input type="text" />
        </div>
        <div>
          <input type="checkbox" />
          Only products in stock
        </div>
      </form>
    );
  }
}

export default SearchBar;
