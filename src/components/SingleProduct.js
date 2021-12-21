import axios from "axios";
import React, { Component } from "react";

const API = "https://fakestoreapi.com/products";

function getProduct(id) {
  return axios.get(`${API}/${id}`);
}

class SingleProduct extends Component {
  state = {
    product: {},
    isLoading: true,
  };

  componentDidMount() {
    Promise.all([getProduct(this.props.params.name)]).then((res) => {
      this.setState({
        product: res[0].data,
        isLoading: false,
      });
      console.log("response", res[0].data);
      //   console.log("country data", this.state.country);
      //   console.log("weather data", this.state.weather);
    });
  }

  render() {
    return (
      <div className="flex justify-center bg-gray-100 p-5">
        <div className="flex bg-white w-1/2 h-1/2 mb-5 shadow-sm rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2x1 transition-shadow duration-300">
          <div className="w-5/12 p-2 dark:bg-white rounded-tl-lg rounded-bl-lg">
            <div
              style={{ backgroundImage: `url(${this.state.product.image})` }}
              className="ml-10 w-5/12 bg-contain bg-no-repeat bg-center w-full h-full transition-transform duration-300 group:hover:transform group-hover:scale-125"
            ></div>
          </div>
          <div className="w-7/12 p-5 bg-gray-600">
            <h1 className="md:text-2x1">{this.state.product.title}...</h1>
            <h3 className="text-gray-100 capitalize dark:text-gray-700">
              {this.state.product.category}
            </h3>
            <p className="text-red-700 mt-4 text-xl md:text-4x1">
              {(Math.round(this.state.product.price * 100) / 100).toFixed(2)}$
            </p>
            <div className="mt-4">{this.state.product.description}...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
