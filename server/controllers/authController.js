const User = require('../models/User')

const login = async (req, res, next) => {
  const {username, password} = req.body

  const user = await User.findOne({username, password})

  if (user) return res.json(user)

  return res.json({message: "Authentication failed"})
}

const register = async (req, res, next) => {
  const {username, password1, password2} = req.body

  if (password1 !== password2) return res.json({message: 'Password is not the same'})

  const user = await User.findOne({username})

  if (!user) {
    const user = await User.create({username, password: password1})
    return res.json({message: "User Created"})
  }

  return res.json({message: "User already exist"})
}

module.exports = {login, register}