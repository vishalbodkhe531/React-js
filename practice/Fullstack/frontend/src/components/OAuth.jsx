import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import {useSelector,useDispatch} from 'react-redux'
import { signInFialure, signInStart, signInSuccess } from "../app/features/userSlice";
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";


function OAuth() {

  const { loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

    const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
      try {
        dispatch(signInStart())
        const Provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        const result = await signInWithPopup(auth, Provider);
        const user = result.user;
        console.log(result);
        const res = await fetch("/api/user/googleAuth", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            profilePic: user.photoURL,
          }),
        });

        const data = await res.json();
          
          if (data.success === false) {
              dispatch(signInFialure());
              toast.error(data.message, {
                  duration: 3000,
                  style: {borderRadius : "10px"}
              })
          }

          if (data) {
            toast.success(`welcome , ${data.name}`, {
              duration: 3000,
              style: { borderRadius: "10px" },
            });
            navigate("/");
            dispatch(signInSuccess(data));
        }
      } catch (error) {
          dispatch(signInFialure());
        console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="bg-red-700 p-1  w-[100%] text-white uppercase"
        type="button"
        onClick={handleClick}
      >
        Sign with Google
      </button>
    </div>
  );
}

export default OAuth;
