const dotenv = require('dotenv').config();
const express = require('express');
const { createPlayer } = require('./database');
const app = express();
const client = require('./database').client;

app.use(express.json());

app.post('/players', async (req, res) => 
{
    try
    {
        const player = 
    {
        name: req.body.name,
        nationality: req.body.nationality,
        role: req.body.role,
    }

    let result = createPlayer (client , player);
    console.log ("created");
    console.log (result);
    
    }
    catch(err)
    {
        console.log(err);
    }
    
});

app.listen(4000);