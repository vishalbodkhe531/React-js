import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
// import Profile from "./components/Profile";
import Profile from "./components/profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Welcome to React Js</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
