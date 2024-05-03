import { useState } from 'react'  // useState => hooks
import './App.css'

function App() {
  let [counter, setCounter] = useState(0); // setCounter is a methode which is control the counter

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <>
        <h1>React</h1>
        <h2>Couter value : {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>
      </>
    </>
  );
}

export default App
