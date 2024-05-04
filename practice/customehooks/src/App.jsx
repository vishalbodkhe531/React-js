
// import useHooks from "./hooks/useHooks.js";

import hooksData from "./hooks/useHooks.js";

// function App() {

//   const [data, setData] = useHooks({ string: "Welcome to react" });

//   return (
//     <>
//       <h1>
//         Data ${data}
//       </h1>
//     </>
//   )
// }

// export default App;

function App() {

  const [data, setData] = hooksData({string : "He Vishal, How are you ???"})

  return (
    <>
      <h2>Data{data}</h2>
    </>
  )
}

export default App;