import React from 'react'
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

function Headers() {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold">MERN Auth</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          {/* {currentUser ? (
            <Link to={"/profile"}>
              <img src={currentUser.profilePic} className="h-[1.5rem]" />
            </Link>
          ) : (
            <Link to={"/signin"}>
              <li>Sign in</li>
            </Link>
          )} */}

          {currentUser ? (
            <Link to={"/profile"}>
              <img src={currentUser.profilePic} alt="profilePic"  className="h-[1.5rem] rounded-full" />
            </Link>
          ) : (
              <Link to={"/signin"}>
                <li>Sign in</li>
            </Link>
          )}

          {/* <Link to={"/signin"}>
            <li>Sign in</li>
          </Link> */}
        </ul>
      </div>
    </header>
  );
}

export default Headers