import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return (
    <>
      <h1>Custom App</h1>
    </>
  )
}


// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const customRender = (
  <a href="https://google.com" target='_blank'>Click to visit google</a>
)

const userName = "Ram";

// React methode == > injecter is babel/transpiler
const reactElement = React.createElement(
  // here we can directly use values
  "a",                                // type
  {
    href: "https://google.com",       // props
  },
  "Click me to visit google !!",      // children

  userName                            // Evaluvated exprestion
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
);
