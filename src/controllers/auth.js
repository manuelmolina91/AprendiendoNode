// const User = require('../models/user')
// const bcrypt = require('bcrypt')
// const jsonwebtoken = require('jsonwebtoken')
// const { getUserByEmail } = require('../controllers/user')
// const saltRounds = 10

// const signup = async ({ email, password}) => {
//     const verifyUser = await getUserByEmail(email)
//     console.log(verifyUser)
//     if (verifyUser) {
//         throw new Error('User existed');
//     }

//     const salt = await bcrypt.genSalt(saltRounds)
//     const hasheoPassword = await bcrypt.hash(password, salt)
//     const user = new User({ email, password: hasheoPassword, salt })
//     await user.save()

//     return jsonwebtoken.sign({ email: user.email }, process.env.TOKEN_SECRET)
// }

// const login = async ({ email, password }) => {
//     const user = await getUserByEmail(email)

//     if (!user) {
//         throw new Error('User not found')
//     }

//     const compare = await bcrypt.compare(password, user.password)

//     if (!compare) {
//         throw new Error('Wrong password')
//     }

//     return jsonwebtoken.sign({ email: user.email }, process.env.TOKEN_SECRET)
// }

// module. exports = {
//     signup,
//     login
// }