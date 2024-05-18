import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Headers from './components/Headers';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Toaster } from "react-hot-toast"
import {Navigate} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Toaster />
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App