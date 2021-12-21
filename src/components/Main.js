import React, { Component } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

class Main extends Component {
  state = {
    data: [],
    productNames: [],
    API: "https://fakestoreapi.com/products",
    searchInput: "",
    isLoading: true,
  };

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  componentDidMount() {
    axios.get(this.state.API).then((res) => {
      this.setState({ data: res.data });
      this.setState({ productNames: this.state.data.title });
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <>
          <div className="flex items-center justify-center">
            <div className="h-2/4">
              <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="flex items-center justify-center m-2">
          <div className="flex border-2 border-gray-200 rounded">
            <input
              type="text"
              className="px-4 py-2 w-80"
              placeholder="Search..."
              onChange={this.searchInputHandler}
            />
            <button className="px-4 text-white bg-gray-600 border-l ">
              Search
            </button>
          </div>
        </div>
        <div className="bg-gray-200 py-4 dark:bg-gray-800">
          <div className="md:w-1/2 mx-auto">
            {this.state.data
              .filter((p) => {
                return p.title
                  .toLowerCase()
                  .includes(this.state.searchInput.toLocaleLowerCase());
              })
              .map((product) => (
                <ProductCard {...product} key={product.id} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default Main;
