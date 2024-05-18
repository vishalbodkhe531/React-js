import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <img src={product.imageSrc} alt="" />
    </div>
  );
};

export default ProductDetails;
