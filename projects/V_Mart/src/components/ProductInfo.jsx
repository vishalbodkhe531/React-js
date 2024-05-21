import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeProducts } from "../app/data/userSlice";

function ProductInfo({ selectedCartInfo }) {
  console.log(selectedCartInfo);

  const dispatch = useDispatch();
  const { toggleLike } = useSelector((state) => state.Cart);

  const handleLike = () => {
    dispatch(likeProducts({ selectedCartInfo, toggleLike }));
  };

  return (
    <>
      <div className="flex font-[cursive] bg-slate-900  sm:w-[90%] w-[30rem] text-white">
        <div className="flex-none w-56 relative">
          <img
            src={selectedCartInfo.imageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto font-medium text-white">
              {selectedCartInfo.topLavelCategory}
            </h1>
            <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
              ${selectedCartInfo.price}
            </div>
            <div className="text-sm font-medium text-white">In stock</div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm font-bold">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-5 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-full border border-slate-200 text-white"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              onClick={handleLike}
              className={`flex-none flex items-center justify-center w-9 h-9 rounded-full bg-violet-50 ${
                toggleLike ? "text-red-600" : "text-violet-600"
              } `}
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-white">{selectedCartInfo.description}</p>
        </form>
      </div>
    </>
  );
}

export default ProductInfo;
