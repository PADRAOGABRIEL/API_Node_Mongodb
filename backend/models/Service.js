const mongoose = require("mongoose")

const { Schema } = mongoose

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},
    { timestamps: true } // Marca quando foi criada etc
)

const Service = mongoose.model("Service", serviceSchema)

module.exports = {
    Service,
    serviceSchema,
}