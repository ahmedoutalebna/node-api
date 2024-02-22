const authorize = (req, res, next)=>{
    if(req.query.name === "Ahmedou" && req.query.discipline === "computer science")
    {
        console.log("You are in authorize middleware function , successfully logged in")
        req.user = {name : "John", discipline: "computer science"}
        console.log(req.user)
        next()
    }
    else
    {
        res.status(401).send("Unauthorize logger")
        next()
    }
}
module.exports = authorize 