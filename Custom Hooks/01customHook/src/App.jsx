import React, { useEffect } from "react";
import useData from "./Hooks/useData";

const App = () => {
  const [data, setData] = useData({ string: "Value from App" });
  useEffect(() => {
    setData(false);
  });
  return <div className="">Data: {data}</div>;
};

export default App;
