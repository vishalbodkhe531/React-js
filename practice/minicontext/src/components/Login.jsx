// import React, { useContext, useState } from 'react'
// import UserContext from '../context/UserContext';

// function Login() {
//     const [userName, setUserName] = useState("");
//     const [UserPassword, setUserPassword] = useState("");
//     const { setUser } = useContext(UserContext)
    
//     const submitHandle = (e) => {
//       e.preventDefault();
//       console.log(userName,UserPassword);
//         setUser({userName,UserPassword})
//     }
//   return (
//     <>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//       />
//       <input
//         type="password"
//         value={UserPassword}
//         onChange={(e) => setUserPassword(e.target.value)}
//       />
//       <button onClick={submitHandle}>Submit</button>
//     </>
//   );
// }

// export default Login

import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const { setUser } = useContext(UserContext)

  const Handler = (e) => {
    e.preventDefault()
    setUser({userName,userPassword})
  }

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={Handler}>Submit</button>
    </>
  );
}

export default Login