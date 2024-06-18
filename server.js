const express = require('express');
const app = express();

app.get('/get', (req, res)=> {
    res.send('Hello from node!');
})

app.listen(3000, ()=> {
    console.log('Node server started at port 3000');
})