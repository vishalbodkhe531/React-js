import React from 'react'
import Cart from './Cart';
import {useSelector} from "react-redux"

function Like() {
    const { } = useSelector((state) => state.Cart);
  return (
    <>
      <Cart />
    </>
  );
}

export default Like