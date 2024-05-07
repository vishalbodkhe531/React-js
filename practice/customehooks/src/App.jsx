// import hooksData from "./hooks/useHooks.js";

// function App() {

//   const [data, setData] = hooksData({string : "He Vishal, How are you ???"})

//   return (
//     <>
//       <h2>Data{data}</h2>
//     </>
//   )
// }

// export default App;
import UserData from "./hooks/useHooks"
function App() {

  const [data, setData] = UserData({content : "Hey Welcome to React"})
  return (
    <>
      <h1>Data : {data}</h1>
    </>
  );
}

export default App;