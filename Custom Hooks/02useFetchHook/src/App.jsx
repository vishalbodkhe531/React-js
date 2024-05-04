import React from "react";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const data = useFetch();
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={data.avatar_url}
        alt=""
        className="h-[10rem] w-[10rem] rounded-full"
      />
      <h1>Name : {data.name}</h1>
      <h1>UserName : {data.login}</h1>
      <h1>Followers : {data.followers + "00K"}</h1>
      <h1>Following : {data.following - 22}</h1>
    </div>
  );
};

export default App;
