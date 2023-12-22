const express = require('express')
const port = 3001
const app = express()

var users = [{
    name : 'John',
    kidneys : [{
        healthy : false
    }]
}];
app.use(express.json());

app.get('/',(req,res) => {
    const johnKidneys = users[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;

    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy === true){
            numOfHealthyKidneys = numOfHealthyKidneys+1;
        }
    }
    const numOfUnhealthyKidneys = numOfKidneys-numOfHealthyKidneys;
    res.json({
        johnKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})


app.post('/',(req,res) => {
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : 'Done!'
    })
})

app.put('/',(req,res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg : 'Done put'
    })
})
// removing all the inhealthy kidneys
app.delete('/',(req,res) => {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg : 'Done delete'
    })
})

app.get('/mess',(req,res) => {
    res.send({
        message : "2+2"
    })
})

app.post('/data',(req,res) => {
    console.log(req.headers);
    res.send('Hello World')
})

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})