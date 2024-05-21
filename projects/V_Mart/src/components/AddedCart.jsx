import React, { useState } from "react";
import { useSelector } from "react-redux";

function AddedCart({ Product }) {
  const { cartArr } = useSelector((state) => state.Cart);

  let [length, setLength] = useState(1);
  let [price, setPrice] = useState(Product.price);

  const handleAddQuentity = () => {
    setLength(length + 1);
    setPrice(price + Product.price);
  };
  const handleSubQuentity = () => {
    if (length > 1) {
      setLength(length - 1);
      setPrice(price - Product.price);
    }
  };

  return (
    <>
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
          <p className="mt-2 text-sm text-gray-500">Price : {price}</p>

          <div className="">
            <div className="flex justify-center items-center">
              <p>Quentity :</p>
              <button
                className="m-3 px-3  rounded-md text-[20px]  bg-black text-white"
                onClick={handleSubQuentity}
              >
                -
              </button>
              {length}
              <button
                className="m-3 px-3 rounded-md text-[20px] bg-black text-white"
                onClick={handleAddQuentity}
              >
                +
              </button>
            </div>

            <button className="bg-green-400 p-2 w-full m-1  hover:bg-green-600 rounded-lg">
              Buy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddedCart;
