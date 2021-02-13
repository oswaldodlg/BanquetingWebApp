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
        from:  'paginabanqueting@outlook.com',
        to: email, 
        subject: "Verifica tu email para iniciar sesión en BanquetingEventos.com",
        text: content
    }

    // if (link.click()) {
    //        User.findByIdAndUpdate(id, {verified: true}, {new: true} )
    //        res.redirect('https://banqueting.herokuapp.com/login');
    // }

    transporter.sendMail(mail, (err, data) => {
        if (err){
           res.json({status: "Email not sent"})
        } else {
            res.json({status: "success"})
        }
    })
})

emailConfirmationRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updateResponse = await User.findByIdAndUpdate(id, {verified: true}, {new: true})
    } catch (err){
        res.status(500).json({ error: err.message })
    }   
    return res.redirect('/login')
})

module.exports = emailConfirmationRouter;