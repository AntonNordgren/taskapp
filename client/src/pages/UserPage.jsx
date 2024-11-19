import React from 'react'

function UserPage() {
  return (
    <div className="vw-100">
      <div className='m-auto w-100 p-2 text-center'>
        <h1>Username</h1>
        <form className="m-auto w-100">
          <h3>Change Password</h3>
          <input type="text" placeholder='New Password' />
          <br />
          <input type="text" placeholder='New Password again' />
          <br />
          <br />
          <button className="custom-button">Change Password</button>
        </form>
        <br />
        <button className="custom-button custom-button-red">Delete User</button>

      </div>
    </div>
  )
}

export default UserPage