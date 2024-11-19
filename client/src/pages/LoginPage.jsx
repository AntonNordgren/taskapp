import React, { useState } from 'react'
import axios from 'axios'

function LoginPage() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setmessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Handle Login')

    axios.post('http://localhost:5000/api/auth/login', {
      username,
      password
    })
    .then(res => {
      console.log(res.data.message)
      if (res.data.message) setmessage(res.data.message)
      console.log(res.data)
    })
    .catch(err => console.log(err))

  }

  return (
    <div className="login-page">
      <form onSubmit={(event) => handleSubmit(event)} className="custom-form p-2 m-auto mt-5 text-center shadow-sm">
        <h4 className="">Login</h4>
        <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder='Username' />
        <br />
        <input onChange={(event) => setPassword(event.target.value)} type="password" placeholder='Password' />
        <br />
        <br />
        {message}
        <br />
        <br />
        <button className="custom-button button shadow" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage