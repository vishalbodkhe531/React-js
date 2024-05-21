import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartUser, productInfo } from "../app/data/userSlice";
import { Link } from "react-router-dom";

function Cart({ Product }) {
  const dispatch = useDispatch();
  const [goToVisitBtn, setgoToVisitBtn] = useState(true);

  const handleAddBtn = () => {
    setgoToVisitBtn(false);
    dispatch(addCartUser(Product));
  };

  const handleDeteils = () => {
    dispatch(productInfo(Product));
  };

  return (
    <div className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-5 my-9  font-extralight">
      <Link to={"/product-info"} onClick={handleDeteils}>
        <div className="h-[13rem] w-[10rem]">
          <img
            className="object-cover w-full h-full"
            src={Product.imageUrl}
            alt=""
          />
        </div>
      </Link>

      <div className="p-4">
        <h1 className="text-sm text-center font-medium text-gray-900">
          {Product.title}
        </h1>
        <p className="mt-2 text-sm text-gray-500"></p>

        {goToVisitBtn ? (
          <button
            className="bg-black  p-2 w-full m-1 hover:bg-gray-600 text-white rounded-lg font-[cursive]"
            onClick={handleAddBtn}
          >
            Add +
          </button>
        ) : (
          <Link to={"/add-cart"}>
            <button className="bg-red-600 p-2 w-full m-1 hover:bg-red-500 text-white rounded-lg font-[cursive]">
              Go to Visit
            </button>
          </Link>
        )}

        <button className="bg-green-400 p-2 w-full m-1  hover:bg-green-600 rounded-lg font-[cursive]">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Cart;
