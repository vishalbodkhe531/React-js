function App() {
  return (
    <>
      <div className="bg-black h-screen w-full flex items-center justify-center  text-black">
        <div className="bg-gray-700 h-72 w-96 p-10 flex justify-center flex-col rounded-xl">
          <div className="bg-white h-20 rounded-xl flex items-center p-3 m-2">
            <div className="">
              <p className="text-xs">from</p>
              <input
                type="text"
                placeholder="0"
                className="outline-none mb-4 text-sm"
              />
            </div>
            <label className="ml-14 w-full">usd</label>
            <select id="" className="">
              xyz
            </select>
          </div>
          <div className=" flex justify-center relative bottom-4">
            <button className="bg-green-600 p-1  text-white rounded-md absolute">
              swap
            </button>
          </div>
          {/* secound input */}
          <div className="bg-white h-20 rounded-xl flex items-center p-3 m-2">
            <div className="">
              <p className="text-xs">To</p>
              <input
                type="text"
                placeholder="0"
                className="outline-none mb-4 text-sm"
              />
            </div>
            <label className="ml-14 w-full">inr</label>
            <select id="" className="">
              xyz
            </select>
          </div>
          <button className="bg-green-600 p-1 m-2 rounded-sm text-white">
            Convert USD to INR
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
