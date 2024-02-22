const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Please enter product name"]
        },
        quantity:{
            type: Number, 
            required: true
        },
        price:{
            type: Number
        }
    }
)
const Product = mongoose.model("Product", ProductSchema)

module.exports = Product 