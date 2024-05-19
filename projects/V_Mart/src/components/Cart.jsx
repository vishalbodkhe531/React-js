import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartUser } from "../app/data/userSlice";

function Cart({ Product }) {
  const dispatch = useDispatch({});
  // const [ids, setId] = useState({});

  const handleAddCart = async (e) => {
    // setId(e.target.Product);
    // console.log(ids);
    dispatch(addCartUser(Product));
  };

  return (
    <div className="cursor-pointer flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-5 my-9">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover w-full h-full"
          src={Product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-medium text-gray-900">{Product.title}</h1>
        <p className="mt-2 text-sm text-gray-500"></p>
        <button
          className="bg-red-500 p-2 w-full m-1 hover:bg-red-600 text-white rounded-lg"
          onClick={handleAddCart}
        >
          Add +{/* {btn} */}
        </button>
        <button className="bg-green-400 p-2 w-full m-1  hover:bg-green-600 rounded-lg">
          Buy
        </button>
      </div>
    </div>
    //  </Link>
    // </Link>
  );
}

export default Cart;
