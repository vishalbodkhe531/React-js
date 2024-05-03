import React, { useState } from "react";

function Elements() {
  const [color,setColor] = useState('black')
  return (
    <body className=" h-screen w-full text-white font-bold" style={{backgroundColor : color}}>
      <h1 className="text-3xl text-center p-5">
        Background Changer By React Js
      </h1>
      <div className="flex mt-52 justify-around cursor-pointer">
        <button className="bg-red-500 p-3 rounded-xl" onClick={()=>setColor("red")}>Red</button>
        <button className="bg-green-500 p-2 rounded-xl" onClick = {()=>setColor("green")}>Green</button>
        <button className="bg-blue-500 p-2 rounded-xl" onClick={()=> setColor("blue")}>Blue</button>
        <button className="bg-yellow-500 p-2 rounded-xl" onClick={()=> setColor("yellow")}>Yellow</button>
        <button className="bg-purple-500  p-2 rounded-xl" onClick={()=> setColor("purple")}>Purple</button>
        <button className="bg-black  p-2 rounded-xl" onClick={()=> setColor("black")}>Black</button>
      </div>
    </body>
  );
}

export default Elements;
