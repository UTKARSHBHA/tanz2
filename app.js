const e = require("express");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ubadco@gmail.com",
            pass: "koimilgaya"
        }
    });
    const mailOptions = {
        from: req.body.email,
        to: "ub2092000@gmail.com",
        subject: `Message from : ${req.body.email}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send("error");
        }
        else {
            console.log("Email send: " + info.response);
            res.send("success");
        }
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server started at port 3000");
});