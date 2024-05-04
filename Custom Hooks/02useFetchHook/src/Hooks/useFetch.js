import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/bhujbalpratik")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.log(`Error while fetch Data ${e}`));
  }, []);
  return data;
};

export default useFetch;
