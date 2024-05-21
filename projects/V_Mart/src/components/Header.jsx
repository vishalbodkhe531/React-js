import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-200 font-[cursive]">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold">Shoping Cart</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hover:text-blue-600">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-blue-600">About</li>
          </Link>
          <Link to={"/signin"}>
            <li className="hover:text-blue-600">Sign in</li>
          </Link>
          <Link to={"/add-cart"}>
            <li className="hover:text-blue-600">Cart</li>
          </Link>
          <Link to={"/like-cart"}>
            <li className="hover:text-blue-600">Likes</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
