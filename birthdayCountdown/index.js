const express = require('express');
const app = express()
const port = 3030 ;
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());

app.get('/',()=>{
            // Use path.join to ensure cross-platform compatibility
            const indexPath = path.join(__dirname,'public','index.html');

            // Send the HTML file as the response
            res.sendFile(indexPath);
});

app.listen(port);