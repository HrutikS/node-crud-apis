//Express
const express = require('express');
const app = express();

//Middleware so that application understands json
app.use(express.json());

//Mongoose
const mongoose = require('mongoose');

//Product 
const product = require('./models/product');
const Product = require('./models/product');

//Routes
// app.get('/get', (req, res)=> {
//     res.send('Hello from node!');
// })

//Create product endpoint
app.post('/product', async(req, res)=> {
    
    try {

        const product = await Product.create(req.body)
        res.status(201).json(product);

    } catch (error) {
        
        console.log("ERROR : "+error.message);
        res.status(500).json({message: error.message});
    }    
})

//Get all products endpoint
app.get('/products', async(req,res)=> {
    try {

        const products = await Product.find({});
        res.status(200).json(products);
        
    } catch (error) {
        
        console.log("ERROR : "+error.message);
        res.status(500).json({message:error.message});
    }
})

//MongoDb connection
mongoose.connect('mongodb://0.0.0.0:27017/node-apis') //connection url from mongodb compass contained 'localhost'. However, using 'localhost' here throws error hence used '0.0.0.0'
    .then(()=> {
        
        console.log("Successfully connected to MongoDb");
        
        app.listen(3000, ()=> {
            console.log('Node server started at port 3000');
        })

    }).catch((error)=> {
        console.log(error);
    })