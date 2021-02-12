const emailConfirmationRouter = require("express").Router();
const nodemailer = require("nodemailer");
const User = require("../models/userModel");

//Set up email account for sending confirmation email

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

emailConfirmationRouter.post('/', (req, res) => {
    const { email, id } = req.body

    let link = `https://banqueting.herokuapp.com/confirmation/:${id}`
    let content = `Favor de verificar tu email haciendo click en el siguiente link ${link}`
     console.log(email)

    let mail = {
        to: `${email}`, 
        from:  process.env.EMAIL2,
        subject: "Verificación de tu correo para iniciar sesión en BanquetingEventos.com",
        text: content
    }

    // if (link) {
    //     User.findByIdAndUpdate(id, {verified: true} )
    //     res.redirect('http://localhost:3000/login');
    // }

    transporter.sendMail(mail, (err, data) => {
        if (err){
           res.json({status: "Email not sent"})
        } else {
            res.json({status: "success"})
        }
    })
})

emailConfirmationRouter.put('/:id', (req, res) => {
    id = req.params.id
    User.findByIdAndUpdate(id, {verified: true}, {new: true})
    res.redirect('https://banqueting.herokuapp.com/login')
})

module.exports = emailConfirmationRouter;