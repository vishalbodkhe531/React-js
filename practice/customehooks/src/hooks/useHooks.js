
// import { useEffect, useState } from "react";
// const hooksData = ({ string }) => {
  
//   const [data, setData] = useState("");

//   useEffect(() => {
//     setData(string)
//   }, [])
//   return [data,setData]
// }

// export default hooksData;

import { useState, useEffect } from "react";

const UserData = ({ content }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(content);
  }, []);

  return [data,setData]
};

export default UserData;