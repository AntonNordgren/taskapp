const jwt = require('jsonwebtoken')

const createAccesstoken = (user) => {
  return jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "10s"})
}

const createRefreshtoken = (user) => {
  return jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "1d"})
}

module.exports={createAccesstoken, createRefreshtoken}