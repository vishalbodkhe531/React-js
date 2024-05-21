import React from "react";
import { useSelector } from "react-redux";
// import Cart from "../components/Cart";
import AddedCart from "../components/AddedCart";

function AddCart() {
  const { cartArr } = useSelector((state) => state.Cart);
  // console.log(cartArr.length);

  return (
    <>
      <div className="flex flex-wrap justify-center w-[100%] p-10">
        {cartArr.map((items) => (
          <AddedCart key={items.id} Product={items} />
        ))}
      </div>
    </>
  );
}

export default AddCart;
