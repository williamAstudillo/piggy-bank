const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const nodemailer = require("nodemailer");
const cors = require("cors");


server.use(bodyParser.json());



server.use(cors({ origin: true }));
server.post("/", (req, res) => {
    const { body } = req;
    const isValidMessage = body.message && body.to && body.subject;
    

    if (!isValidMessage) {
        return res.status(400).send({ message: "invalid request" });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'henryapp2021@gmail.com',
            pass: "vgiwbomfyvxugdpo"
        }
    });

    const mailOptions = {
        from: 'henryapp2021@gmail.com',
        to: body.to,
        subject: body.subject,
        text: body.message,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return res.status(500).send({ message: "error " + err.message });
        }

        return res.send({ message: "email sent" });
    });
});



module.exports = {  server };
