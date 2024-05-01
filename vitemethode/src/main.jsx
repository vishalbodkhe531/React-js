import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp() {
  return (
    <>
      <h1>Custom app</h1>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <MyApp />
);
