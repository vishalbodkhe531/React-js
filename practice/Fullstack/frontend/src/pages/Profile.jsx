import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteUser } from "../app/features/userSlice";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // const handleDelete = async () => {
  //   const result = confirm("Are you sure to delete your accout");

  //   if (!result) return;

  //   const API = await fetch(`/api/user/${currentUser._id}`, {
  //     method: "DELETE",
  //   });

  //   const data = await API.json();

  //   if (data.success === false) {
  //      toast.error(data.message, {
  //       duration: 3000,
  //       style: { borderRadius: "10px" },
  //      });
  //     return;
  //   }

  //   if (data) {
  //     dispatch(deleteUser());
  //     toast.success(data.message, {
  //       duration: 3000,
  //       style: { borderRadius: "10px" },
  //     });
  //   }
  // };

  const handleDelete = () => {
    
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-24 w-auto rounded-[50%]"
          src={currentUser.profilePic}
          alt="Profile Image"
          title="Profile Image"
        />
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={currentUser.name}
                readOnly
                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-lg  ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>
          <div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                readOnly
                defaultValue={currentUser.email}
                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-lg  placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none"
              />
            </div>
          </div>

          <div>
            <button
              // type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
              EDIT PROFILE
            </button>
          </div>
        </form>

        <p className="mt-10 flex justify-between items-center">
          <button className="cursor-pointer" onClick={handleDelete}>
            Delete Account
          </button>
          <button className="cursor-pointer">Logout</button>
        </p>
      </div>
    </div>
  );
}

export default Profile;
