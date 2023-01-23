const Rover = require('../models/rover')

const getRoversList = async () => {
    const rovers = await Rover.find()
    return rovers
}

const getRoversById = async (id) => {
    const rover = await Rover.findById(id)
    return rover
}

const createRover = async ({ id, img_src, earth_date }) => {
    const rover = new Rover({ id, img_src, earth_date })
    return rover.save()
}

// const checkRoverIfExists = async (id) => {
//     const rover = await Rover.find({ id: id}).exec();
//     return rover   
// }

const updateRover = async (id, data) => {
    const rover = await getRoversById(id)
    await rover.updateOne(data)
    
    return updateRover(id)
}

const removeRover = async (id) => {
    await Rover.findByIdAndDelete(id)
    
    return true
}

module.exports = {
    getRoversList,
    getRoversById,
    createRover,
    updateRover,
    removeRover,
    //checkRoverIfExists
}