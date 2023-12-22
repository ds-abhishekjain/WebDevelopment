// app.METHOD(PATH,HANDLER)
// METHOD : (HTTP REQUEST METHOD) GET, POST, PUT, DELETE
// HANDLER : IT IS THE FUNCTION EXECUTED WHEN THE ROUTE IS MATCHED


const express = require("express");
const port = 3000;
const app = express();

app.get('/',(req,res) => {
    res.send('ALWAYS TAKE CARE OF WHAT YOU HAVE')
})

app.get('/data',(req,res) => {
    res.json({
        name: 'Abhishek',
        age : 21
    })
})

app.post('/conversation',(req,res) => {
    console.log(req.body);
    res.send({
        msg : "2+2 =4"
    })
})


app.listen(port,() => {
    console.log(`Example app is listening port ${port}`);
})