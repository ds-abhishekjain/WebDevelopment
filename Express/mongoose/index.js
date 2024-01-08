const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port  = 3030;


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:2nqzodEQDy6dhECW@project0.ejazv8j.mongodb.net/userAppNew')
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const user = mongoose.model('user',userSchema);

app.post('/signup',async function(req,res){
    
    const name  = req.headers.name;
    const email  = req.headers.email;
    const password  = req.headers.password;
    
    const existingUser =  await user.findOne({email : email});
    // CRUD => create read update delete
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const newUser = new user({
        name : name,
        email : email,
        password : password
    });

    newUser.save();

    res.json({
        "msg" : "User created successfully"
    })
})
app.listen(port);





