// const jsonwebtoken = require ('jsonwebtoken')
// const User = require('../models/schemaUser')

// const verifyAuthentication = async (request, response, next) => {
//     if(request.path.incluides ('/auth')) {
//         return next()
//     }
//     if (!request.headers.authorization) {
//         return response.status(403).json('Quiet! You are not autheticaction')
//     }

//     const token = request.headers.authorization.split(" ")[1]

//     if(!token) {
//         return response.status(403).json('Quiet! Wrong token')
//     }

//     const load = jsonwebtoken.decode(token, process.env.TOKEN_SECRET)

//     if(!load || !load.email) {
//         return response.status(403).json('SORRY! Wrong token')
//     }

//     const user = await User.findOne({email: load.email})

//     if(!user) {
//         return response.status(403).json('WOW! Wrong token')
//     }

//     request.user = {id: user._id, email: user.email}

//     next()
// }

// module.exports = {
//     verifyAuthentication
// }