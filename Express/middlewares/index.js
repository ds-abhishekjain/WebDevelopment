const express = require('express')
const port = 3000
const app = express()

// define miidleware

function userAuthentication(req,res,next) {
    const username = req.headers.username
    const password = req.headers.password

    if (username != "abhishek" || password != "pass123") {
        res.status(400).json({"msg" : "Something is wrong"})
    }
    else{
        next();
    }
}

function kidneyCheck(req,res,next) {
    const kidneyId = req.query.kidneyId
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg" : "Check the input"})
    }
    else{
        next();
    }
}
let numberOfReq = 0;

function calculateRequets(req,res,next) {
    numberOfReq++;
    console.log(numberOfReq);
    next();
}

// lets use calculateReq middlewares for every get request written beyong this line
app.use(calculateRequets);

app.get('/mid',userAuthentication,kidneyCheck,(req,res) => {
    res.status(200).json({"msg" : "All Good!"})
})

app.listen(port);