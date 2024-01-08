const { ALL } = require('dns');
const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = '123456';
const port = 3030;

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username : "abhishek@gmail.com",
        password : "1234",
        name : "Abhishek JAin"
    },  
    {
        username : "parul@gmail.com",
        password : "123456",
        name : "Parul JAin"
    },
    {
        username : "mysha@gmail.com",
        password : "123498",
        name : "Mysha JAin"
    },
];

function userExists(username,password) {
    let userExists = false;

    for (let i = 0; i < ALL_USERS.length; i++) {   
        if (username === ALL_USERS[i].username && password === ALL_USERS[i].password) {
            userExists = true;
        }   
    }
    return userExists;
}
app.get('/',(req,res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        const returnList = ALL_USERS.find((list) => list.username != username )

        res.json(
            {
                users : returnList
            }
        )
    } catch (error) {
        return res.status(403).json({
            msg : "Invalid token"
        })
    }
});

app.post('/signin',(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username,password)) {
        return res.status(403).json({
            msg : "User doesnt exists in memory"
        });
    }

    var token = jwt.sign({username: username},jwtPassword);
    return res.json({
        token
    });
});

app.listen(port);