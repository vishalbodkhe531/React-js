import './App.css'
import UserProvider from './context/UserProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserProvider>
      <h1>Welcome to React Js</h1>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App
