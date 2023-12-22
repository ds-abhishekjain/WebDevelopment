const express = require('express')
const app = express()
const port = 3000

app.get('/auth',(req,res) => {
    
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if (username != "abhishek" || password != "pass123") {
        res.status(400).json({"msg":"Something is wrong with your input"})
    }
    else if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg": "Something is wrong with the inputs"})
    }
    else{
        res.status(200).json({"msg": "works fine"})
    }
})  

app.listen(port)