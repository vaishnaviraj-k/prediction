const dotenv = require('dotenv').config();
const express = require('express');
const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.uri);

async function main()
{
    try
    {
        await client.connect();
        console.log("Succesfully connected to database.")
    }
    catch(err)
    {
        console.error(err);
    }
}

main().catch(console.error)

async function createPlayer(client, newPlayer)
{
    const result = await client.db("series").collection("players").insertOne(newPlayer);
    console.log("Player created successfully.")
    return result;
}

module.exports = { createPlayer, client};