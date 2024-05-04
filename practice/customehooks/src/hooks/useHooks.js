// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const useHooks = ({string}) => {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     setData(string);
//   }, []);

//   return [data, setData];
// };

// export default useHooks;
const hooksData = ({ string }) => {
  
  const [data, setData] = useState("");

  useEffect(() => { 
    setData(string)
  }, [])
  return [data,setData]
}

export default hooksData;