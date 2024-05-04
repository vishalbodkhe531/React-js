import React, { useEffect, useState } from "react";

const fetchData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/vishalbodkhe531")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.log(`Error while fetch Data ${e}`));
  }, []);
  return [data,setData];
};

export default fetchData;
