const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port:465,
    host:"pranavnimbagiri19@gmail.com",
    auth:{
        user:'',
        pass:'',
    },
    secure:true,
});