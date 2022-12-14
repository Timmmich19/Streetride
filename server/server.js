const nodemailer = require("nodemailer")
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()
const app = express()


const PORT = process.env.EMAIL_SERVER_PORT || 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.post("/send", cors(), async (req, res) => {
    let { mail, name, age, text } = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: mail,
        subject: "TestDrive ",
        html: `<div className = "email" style ="
        border: 2px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 30px;
        ">
        <h1>Here is yor info</h1>
        <p>Your name : ${name}</p>
        <p>Your age : ${age}</p>
        <p>Your message : ${text}</p>
        <p>All the best, StreetRide</p> </div>`
    })

})

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}/send`))