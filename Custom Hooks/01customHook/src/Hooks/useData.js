// Hooks always return plain javascript
import React, { useEffect, useState } from "react";

const useData = ({ string }) => {
  const [value, setValue] = useState("");
  console.log(value);
  useEffect(() => {
    setValue(string);
  }, []);
  return [value, setValue];
};

export default useData;
