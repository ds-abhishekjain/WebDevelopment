const express = require('express');
const app = express()
const port = 3030 ;
const zod = require('zod');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const path = require('path');
const jwtPassword = '123456';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:ngMuFKzFLdzbH487@jsprojects.kzmeu5h.mongodb.net/LoginPage')
}

// const schema = zod.object({
//     fname : zod.string().min(2).max(20),
//     email : zod.string().email(),
//     password: zod.string().min(8),
// })

const userSchema = new mongoose.Schema({
    fname : String,
    email : String,
    password: String
});

const user = mongoose.model('user',userSchema);

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());

app.get('/signin',(req,res) => {
        // Use path.join to ensure cross-platform compatibility
        const indexPath = path.join(__dirname,'public','index.html');

        // Send the HTML file as the response
        res.sendFile(indexPath);
});

app.get('/signUp',(req,res) => {
    // Use path.join to ensure cross-platform compatibility
    const signUpPath = path.join(__dirname,'signUp','index.html');

    // Send the HTML file as the response
    res.sendFile(signUpPath);
});



app.post('/signUp',async function(req,res) {

        const {fname,email,password} = req.body;
    
        const existingUser =  await user.findOne({email : email});
        // CRUD => create read update delete
        if(existingUser){
            return res.status(400).json({
                "msg" : "Username already exists"});
        }
    
        const newUser = new user({
            fname : fname,
            email: email,
            password: password
        });
    
        newUser.save();
    
        res.json({
            "msg" : "User created successfully"
        })
});
async function userExists(email,password) {
    try{
        const existingUser = await user.findOne({
            email: email,
            password: password
        });
        return existingUser !== null;
    }catch(error){
        console.error(error);
        return false;
    }

};

app.post('/signIn', async function(req,res) {
    const {email,password} = req.body;

    if (!(await userExists(email,password))) {
        res.status(404).json({
            "msg" : "User doesnt exists! Please Sign Up!"
        });
    }else{
        res.json({
            "msg": "Logged In"
        });
    }
});


app.listen(3030);