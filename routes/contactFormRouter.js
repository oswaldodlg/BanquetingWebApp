const contactRouter = require("express").Router();
const nodemailer = require("nodemailer");

//Set up email contact form

let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: process.env.EMAIL2,
        pass: process.env.PASSWORD2
    }
});

transporter.verify((error, success) => {
    if (error){
        console.log(error)
    } else {
        console.log('Server is ready to take messages ')
    }
})

contactRouter.post('/', (req, res) => {
    const { name, email, message } = req.body

    let content = `name: ${name} \n email: ${email} \n message: ${message}`

    let mail = {
        from: name,
        to: "banquetesarqserv_isela@hotmail.com", 
        subject: "Nuevo Mensaje desde Página Web Banqueting",
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