const express = require('express')
const app = express()
const PORT = process.env.PORT || 4321

app.get("/", (request,response) =>{
    response.send(`Hello world I am listening to the ${PORT}`)
})

app.listen(PORT, ()=>{
    console.log(`PORT is ${PORT}`)
})