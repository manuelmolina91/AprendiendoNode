const mongoose = require('mongoose')

const roversSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    img_src: {
        type: String
    },
    earth_date: {
        type: String
    },
});

const Rover = mongoose.model("Rover", roversSchema)

module.exports = Rover