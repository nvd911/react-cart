import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Products from "./../components/Products";
import Product from "./../components/Product";

export class ProductsContainer extends Component {
  render() {
    var { products } = this.props;

    let content =
      products.length < 0
        ? ""
        : products.map((product, index) => {
            return (
              <Product key={index} product={product} index={index}></Product>
            );
          });
    return <Products>{content}</Products>;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.number,
      description: PropTypes.string,
      price: PropTypes.number,
      invenrory: PropTypes.number,
    })
  ),
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductsContainer);
