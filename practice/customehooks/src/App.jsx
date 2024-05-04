// import useData from "./hooks/useData.js"

import useData from "./hooks/useData";

// function App() {

//   const [data, setData] = useData({string : "Welcome to React"})
//   return (
//     <>
//       <h1>Data : {data}</h1>
//     </>
//   );
// }

// export default App

function App() {
  const [data, setData] = useData({ string: "React here !!!" });
  
  return (
    <>
      <h1>Data : {data}</h1>
    </>
  );
}

export default App;
