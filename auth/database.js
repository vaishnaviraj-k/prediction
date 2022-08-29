const dotenv = require('dotenv').config();
const express = require('express');
const {MongoClient} = require('mongodb');

const client = new MongoClient(process.env.uri);

async function main()
{
    try
    {
        await client.connect();
    }
    catch(err)
    {
        console.error(err);
    }
}

main().catch(console.error);

async function createListing(client, newListing)
{
    const result = await client.db("users").collection("loginCredentials").insertOne(newListing);
    return result;
}

async function findByEmail (client, findEmail) 
{
    const result = await client.db("users").collection("loginCredentials").findOne({email: findEmail});
    console.log (result);
}

let emails = [];
async function findEmails (client,emails) 
{
    const result = await client.db("users").collection("loginCredentials").find({}).project({_id:0, email:1}).toArray();
    for (let i = 0; i < result.length; i++) 
    {
        emails.push(result[i].email);
    }
    return emails;
}




module.exports = { createListing, findByEmail, findEmails , client};