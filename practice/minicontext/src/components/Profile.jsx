// import React, { useContext } from 'react'
// import UserContext from '../context/UserContext'

import { useContext } from "react"
import UserContext from "../context/UserContext"

// function Profile() {
//   const { user } = useContext(UserContext);
//   if (!user) return <h1>You should Login first</h1>;
//   return <h1>Welcome {user.userName}</h1>;
// }

// export default Profile

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Login Please</h1>
  return (
    <h1>
      Welcome {user.userName}
      Your password is {user.userPassword}
    </h1>
  );
}

export default Profile