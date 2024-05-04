import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = " ABCDEFGHIKLMNOPQRSTVXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*:|=+~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3)      ==> we can define range
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  // if dependancy array's value change then useEffect call the function callgenrator
  return (
    <>
      <div className="bg-black h-screen text-white flex items-center flex-col">
        <h1 className=" text-3xl  p-5">Password Generator</h1>
        <div className="bg-gray-700 w-full max-w-md h-32 flex justify-center rounded-xl mt-20 flex-wrap">
          <div className="">
            <input
              type="text"
              className="p-2 rounded-l-md w-80 mt-4 text-black font-mono outline-none"
              placeholder="password"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className="bg-orange-400 p-2 rounded-r-md m-1"
              onClick={copyPassword}
            >
              copy
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label className="m-2 text-sm">length {length}</label>

            <input
              type="checkbox"
              className="m-2"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />

            <label className="mr-2 text-sm">Number</label>

            <input
              type="checkbox"
              className="m-2"
              defaultChecked={setCharAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label className="m-2 text-sm">Charectors</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
