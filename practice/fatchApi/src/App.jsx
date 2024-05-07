// import fetchData from "./hooks/useFatch"


// function App() {

//   const data = fetchData()
//   console.log(data[0]);
//   return (
//     <>
//       <div className="text-center bg-black text-white font-serif text-xl">
//         <h1>Welcome to Profile</h1>
//       </div>
//       <div className="bg-black h-screen w-full text-white flex justify-center">
//         <div className="">
//           <div className="flex justify-center">
//             <img
//               src={data[0].avatar_url}
//               alt=""
//               className="h-[20rem] m-6 border-2 rounded-full shadow-white shadow-lg"
//             />
//           </div>
//           <div className="p-2 font-mono">
//             <h2>id : {data[0].id}</h2>
//             <h2>name : {data[0].name}</h2>
//             <h2>userName : {data[0].login}</h2>
//             <h2>bio : {data[0].bio}</h2>
//             <h2>followers : {data[0].followers + "1k"}</h2>
//             <h2>created_at : {data[0].created_at}</h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App

import fetchData from "./hooks/useFatch"
function App() {

  const [data, setData] = fetchData()
  console.log(data);
  return (
    <>
      <img src={data.avatar_url} alt="" />
    </>
  );
}

export default App
