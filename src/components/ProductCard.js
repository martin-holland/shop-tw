import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, title, price, description, category, image }) {
  return (
    // <Link to={{ pathname: `${id}` }}>
    <Link to={`products/${id}`}>
      <div>
        <div className="flex bg-white w-full mb-5 shadow-sm rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2x1 transition-shadow duration-300">
          <div className="w-5/12 p-2 dark:bg-white rounded-tl-lg rounded-bl-lg">
            <div
              style={{ backgroundImage: `url(${image})` }}
              className="ml-10 w-5/12 bg-contain bg-no-repeat bg-center w-full h-full transition-transform duration-300 group:hover:transform group-hover:scale-125"
            ></div>
          </div>
          <div className="w-7/12 p-5 bg-gray-600">
            <h1 className="md:text-2x1">{title.substr(0, 100)}...</h1>
            <h3 className="text-gray-100 capitalize dark:text-gray-700">
              {category}
            </h3>
            <p className="text-red-700 mt-4 text-xl md:text-4x1">
              {(Math.round(price * 100) / 100).toFixed(2)}$
            </p>
            <div className="mt-4">{description.substr(0, 200)}...</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
