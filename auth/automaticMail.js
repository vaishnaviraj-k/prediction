const nodemailer = require("nodemailer");
const { findEmails } = require("./database");
const client = require('./database').client;

var abc = emails;
console.log(emails);

const transporter = nodemailer.createTransport ({
    service: 'Gmail',
    auth: {
        user: 'vaishnaviraj.k@gmail.com',
        pass: 'lmjvimjwgjgsxoxu'
    }
});

let mailOptions = 
{
    from: 'vaishnaviraj.k@gmail.com',
    to: mails,
    subject: "Sending automatic e-mails.",
    text: `Hello!`,
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }
    else 
    {
        console.log('Email sent:' + info.response);
    }
});


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
      from: "r.shresta25@gmail.com",
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

