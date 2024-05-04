// rfce shortcut
import React from "react";

function Card({ name, info, imgSrc }) {
  return (
    <>
      <div className="w-[300px] rounded-md border m-4 shadow-md hover:shadow-white">
        <img
          src={imgSrc}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{name} brand</h1>
          <p className="mt-3 text-sm text-white">{info}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
