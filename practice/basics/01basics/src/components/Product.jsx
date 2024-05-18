import React from 'react'
import {useParams} from "react-router-dom"

function Product() {
    const param = useParams()
  return (
      <div>#Product ID : {param.id}</div>
  )
}

export default Product