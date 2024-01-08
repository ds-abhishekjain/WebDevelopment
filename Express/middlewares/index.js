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

// next means that it doesnt gets stuck and moves to next argument of the route
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
app.use(express.json());

app.post('/catche-check',(req,res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("you have"+ kidneyLength + "kidneys")
})

app.post('/mid',(req,res) => {
    console.log(req.body);
    res.json({"msg" : "post route executed"})
})

app.get('/mid',userAuthentication,kidneyCheck,(req,res) => {
    res.status(200).json({"msg" : "All Good!"})
})

// error based middlewares
// global catches
// used to not expose the sever error when there is an unexpectes input

app.use(function (err,req,res,next) {
    res.json({
        msg : "Sorry Something went wrong with the server"
    })
})

app.listen(port);