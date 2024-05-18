import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../pages/ProductDetails";

function Cart({ title, Img }) {
  return (
    <Link to={"/product-detail/:id"}>
      <div className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-5 my-9">
        <div className="h-[13rem] w-[10rem]">
          <img className="object-cover w-full h-full" src={Img} alt="" />
        </div>

        <div className="p-4">
          <h1 className="text-lg font-medium text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-500"></p>
          <button className="bg-red-400 p-2 w-full m-1 hover:bg-red-600 rounded-lg">
            Add +
          </button>
          <button className="bg-green-400 p-2 w-full m-1 hover:bg-green-600 rounded-lg">
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Cart;
