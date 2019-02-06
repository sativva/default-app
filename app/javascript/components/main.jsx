import React, { Component } from 'react';
import ResourcesList from './resources_list'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts(1)
    // this.fetchSchedules()
  }

  handlePageChange = (pageNumber) => {
    this.fetchProducts(pageNumber)
  }

  fetchProducts = (page_id) => {
    fetch(`/api/v1/products?page=${page_id}`, {
      method: 'GET',
      // body: JSON.stringify({active_page: this.state.activePage}), // or 'PUT',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then( (response) =>  {
      console.log(response.products),
      this.setState({ products: response.products }) })
    .catch(error => console.error('Error:', error));
  }


  render() {
    return (
      <div>
        <ResourcesList
          products={this.state.products}
          products_count={this.state.products_count}
          handlePageChange={this.handlePageChange}
        />
          <br/>
        <h3>Mes listes</h3>
          <br/>
      </div>

    );
  }
}

export default Main;
