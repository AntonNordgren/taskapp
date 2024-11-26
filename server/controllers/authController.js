const User = require('../models/User')
const {createAccesstoken, createRefreshtoken} = require('../jwt/token')

// const cookieParser = require('cookie-parser')

const login = async (req, res, next) => {
  const {username, password} = req.body

  const user = await User.findOne({username, password})

  if(!user) return res.json({message: "Authentication failed"})

  const accesstoken = createAccesstoken(user)
  const refreshtoken = createRefreshtoken(user)

  await User.updateOne(
    { _id: user._id },
    { $set: { refreshtoken: refreshtoken } }, { upsert: false }).then((res, err) => {
      console.log(res, err)
    })

  // res.cookie('refreshtoken', refreshtoken, {httpOnly: true})

  return res.json({message: "Logged In", accesstoken, user})
}

const register = async (req, res, next) => {
  const {username, password1, password2} = req.body

  if (password1 !== password2) return res.json({message: 'Password is not the same'})

  const user = await User.findOne({username})

  if (!user) {
    const user = await User.create({username, password: password1, refreshtoken: ""})
    return res.json({message: "User Created"})
  }

  return res.json({message: "User already exist"})
}

const logout = async (req, res, next) => {
  console.log('Logout')
}

const refreshtoken = async (req, res, next) => {
  console.log('refreshtoken')
}

module.exports = {login, register, logout, refreshtoken}