import React from "react";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";

function LikeProjects() {
  const { likeCartArr } = useSelector((state) => state.Cart);
  console.log(likeCartArr);
  return (
    <>
      {likeCartArr.map((item) => (
        <Cart Product={item} />
      ))}
    </>
  );
}

export default LikeProjects;
