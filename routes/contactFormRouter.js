const contactRouter = require("express").Router();
const nodemailer = require("nodemailer");

//Set up email contact form

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

transporter.verify((error, success) => {
    if (error){
        console.log(error)
    } else {
        console.log('Server is ready to take messages ')
    }
})

contactRouter.post('/info', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message}`

    let mail = {
        from: name,
        to: "oswaldodlg25@gmail.com", 
        subject: "Nuevo Mensaje desde Página Web",
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err){
            res.json({status: "fail"})
        } else {
            res.json({status: "success"})
        }
    })
})

module.exports = contactRouter;