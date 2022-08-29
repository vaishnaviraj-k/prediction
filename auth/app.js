const dotenv = require('dotenv').config();
const express = require('express');
const { createListing } = require('./database');
const app = express();
const addDB = require('./database').createListing;
const client = require('./database').client;

app.use(express.json());

// app.get()

app.post('/posts', async (req, res) => 
{
    try
    {
        const user = 
    {
        username: req.body.name,
        email : req.body.mail,
        password: req.body.pass,
    }

    let result = createListing (client , user);
    console.log ("created");
    console.log (result);
    
    }
    catch(err)
    {
        console.log(err);
    }
    
});

app.listen(4000);