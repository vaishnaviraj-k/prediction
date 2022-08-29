const nodemailer = require("nodemailer");
const { findEmails } = require("./database");
const nodemailer = require("nodemailer");
const { findEmails } = require("./database");
const client = require('./database').client;

const transporter = nodemailer.createTransport ({
    service: 'Gmail',
    auth: {
        user: 'vaishnaviraj.k@gmail.com',
        pass: 'lmjvimjwgjgsxoxu'
    }
});

function sendMail(to, subject, body) {
    let details = {
      //from: process.env.EMAIL_SENDER
      from: "abc@gmail.com",
      to,
      subject: subject,
      body: body, 
    };
  
    return new Promise((resolve, reject) => {
      transporter.sendMail(details, function (error, data) {
        if (error) reject(error);
        else {
          resolve(data);
        }
      });
    });
  }

async function sendMails () {
    const result = await client.db("users").collection("loginCredentials").find({}).project({_id:0, email:1}).toArray();
    for (let i = 0; i < result.length; i++) 
    {
        sendMail(result[i].email, "subject", "body");
    }
    console.log('Email sent successfully.')
}

sendMails();

