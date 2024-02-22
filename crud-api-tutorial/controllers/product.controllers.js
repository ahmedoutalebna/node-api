
const Product = require('../models/product.model.js')

const getAllProducts = async(req, res)=>{
    try
    {
        console.log('...you are in products all method')
        const products = await Product.find() 
        res.status(200).json(products)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
   
}

const getProductsByName = async(req, res)=>{
    const {name} = req.params 
    try
    {
        const product = await Product.findOne({name})
        if(!product)
        {
            return res.status(404).send("Product not found, please enter a valid product")   
        }
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

const createProducts = async(req, res)=>{
    try
    {
        const product = await Product.create(req.body)
        if(!product)
        {
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(product)
    }
    catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

const updateProducts = async(req, res)=>{
    const productId = req.params.id  
    const updateData = req.body 
    try
    {
        const wantedProduct = await Product.findByIdAndUpdate(productId, updateData) 
        if(!wantedProduct)
        {
            return res.status(404).json("ID not found")
        }
        const updatedProduct = await Product.findById(productId)
        res.status(200).json(updatedProduct)
    }
    catch(err)
    {
        console.error(err)
        res.status(500).json({message: err.message})
    }
} 
const deleteProducts = async(req, res)=>{
    const id = req.params.id
    try
    {
        const deletedProduct = await Product.findByIdAndDelete(id)
        if(!deletedProduct)
        {
            return res.status(404).send("Product not found")
        }
        res.status(200).json({message: `Product with ${id} is deleted successfuly`})
    }
    catch(err)
    {
        console.error(err)
        res.status(500).json({message: err.message})
    }
}

module.exports =
            {
                getAllProducts,
                getProductsByName,
                createProducts,
                updateProducts, 
                deleteProducts
            }