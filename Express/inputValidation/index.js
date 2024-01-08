const zod  = require('zod')
const express = require('express')
const port  = 3000
const app = express()

//zod schema for email pass 
// email: string
// pass : atleast 8 chars
// country : "IN" or "US"
 
const schema = zod.object({
    email : zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
 })


app.get('/',(req,res) => {
    res.send('Welcome to SignUp!')
})
app.use(express.json())

app.post('/signin',(req,res) => {
    
    const response = schema.safeParse(req.body)
    
    res.send({
        response
    })
})
app.post('/kidneyCheck',(req,res)=>{
    // kidneys can only be array od number eg: kidneys = [1,2]
    // to validate it using zod that the user has passed an array as an iput or not

    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)

    if(!schema.success){
        res.json({
            msg : "Wrong Input"
        })
    }else{
        res.send({
            response
        })
    
    }

})

app.listen(port,() => {
    console.log(`Listening on ${port}`);
})
