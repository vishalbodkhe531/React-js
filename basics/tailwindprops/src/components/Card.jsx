// rfce shortcut
import React from "react";

function Card({ laptopName, laptopInformation, laptopImg }) {
  return (
    <>
      <div className="w-[300px] rounded-md border m-4">
        <img
          src={laptopImg}
          alt="Laptop"
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{laptopName} brand</h1>
          <p className="mt-3 text-sm text-white">{laptopInformation}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
