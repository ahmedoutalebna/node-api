const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/products.route')

app.use(express.json())

// SET UP ROUTES
app.use('/api', productRoute)

// delete product by id
app.delete('/api/deleteProduct/:id', async(req, res)=>{

})




mongoose.connect("mongodb://localhost:27017/api-crud-tutorial")
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.error(err)
})


app.listen(5500, ()=>{
    console.log('the port is listen in port 5500')
})