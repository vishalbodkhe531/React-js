import { useState, useEffect } from "react";

function useData({ string }) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(string);
  }, []);
  console.log(value);
  return [value, setValue];
}

export default useData;
