import React from "react";
import ProductInfo from "../components/ProductInfo";
import { useSelector } from "react-redux";

function ProductDetails() {
  const { selectedCart } = useSelector((state) => state.Cart);
  return (
    <>
      <ProductInfo selectedCartInfo={selectedCart} />
    </>
  );
}

export default ProductDetails;
