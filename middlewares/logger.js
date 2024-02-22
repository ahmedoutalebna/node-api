const logger = (req, res, next)=>{
    const method = req.method
    console.log(`this is logger middleware`)
    console.log('the request body ', req.body)
    const url = req.url 
    const currentDate = new Date().getFullYear()
    console.log(`This is a middleware function the method is: ${method} and the url is ${url} and the current date is ${currentDate}`)
    next()
}

module.exports = logger