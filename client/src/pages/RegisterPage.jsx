import React, { useState } from 'react'
import axios from 'axios'

function RegisterPage() {

  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Handle Register')

    axios.post('http://localhost:5000/api/auth/register', {
      username,
      password1,
      password2
    })
    .then(res => {
      console.log(res)
      setMessage(res.data.message)
    })
    .catch(err => console.log(err))

  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)} className="custom-form p-2 m-auto mt-5 text-center shadow-sm">
        <h4 className="">Sign Up</h4>
        <input onChange={(event) => setUsername(event.target.value)} type="text" placeholder='Username' />
        <br />
        <input onChange={(event) => setPassword1(event.target.value)} type="password" placeholder='Password' />
        <br />
        <input onChange={(event) => setPassword2(event.target.value)} type="password" placeholder='Password Again' />
        <br />
        <br />
        {message}
        <br />
        <br />
        <button className="button custom-button" type="submit">Sign Up</button>
      </form>

    </div>
  )
}

export default RegisterPage