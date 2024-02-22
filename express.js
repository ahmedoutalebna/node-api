const express = require("express")
const app = express()


const authorize  = require('./middlewares/authorize')
const people = require('./Navbar/data')
const logger  = require('./middlewares/logger')


app.use(logger)
app.use(express.static('./public-methods'))
app.use(express.urlencoded({extended: false}))
app.get('/about', (req, res)=>{
    res.send("About page")
})
app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name)
    {
        res.send(`Welcome ${name}`)
    }
    else
    {
        res.status(404).send('please set a name before move on')
    }
})
app.listen(5500, ()=>{
    console.log("ther server is listening on port 5500")
})


// app.use(express.static('./Navbar'))
// const { data } = require('./Navbar/index')
// app.get('/api/products/:productId', (req, res)=>{

//     const {productId} = req.params 
//     const singleProduct = data.find((p)=> p.id === productId)
//     if(!singleProduct)
//     {
//         return res.status(404).send("<h2>the product requested is not found Please re-enter a valid product.</h2>")
//     }
//     return res.json(singleProduct)
// })
// let output = []
// app.get('/api/v1/query', (req, res)=>{
//     let newData = [...data]
//     const n = req.query.name
//     const l = req.query.limit
//     if(n)
//     {
//         newData = newData.filter((i)=>{
//             return i.name.includes(n)
//         })
//     }
//     if(l)
//     {
//         newData = newData.slice(0, Number(l))
//     }
//     res.send(newData)
//     })

// req => middleware => response