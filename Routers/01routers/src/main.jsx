import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import './index.css'
import Home from "./components/home.jsx";
import About from './components/about.jsx'
import Layout from './components/layout.jsx'
import gitHub from './components/gitHub.jsx'
import Contact from './components/contact.jsx'

// 1] methode 

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "Contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);


// 2] methode 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gitHub" element={<gitHub />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
