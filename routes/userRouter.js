const userRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");

userRouter.post("/register", async (req, res) => {
    try {
    let {email, password, passwordCheck, displayName} = req.body;

    //validation

        if (!email || !password || !passwordCheck)
            return res.status(400).json({msg: "Not all fields have been entered"});
        if (email != process.env.EMAIL_SECRET)
            return res.status(400).json({msg: 'Invalid email'});
        if (password.length < 5)
            return res.status(400).json({msg: "The password needs to be at least 5 characters long"});
        if (password !== passwordCheck)
            return res.status(400).json({msg: "Enter the same password twice for verification"});
        
    const existingUser =  await User.findOne({email: email})
        if (existingUser)
        return res.status(400).json({ msg: "An account with this email already exists"  });
    
        if (!displayName) displayName = email;

    // password crypting
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
    // new user
        const newUser = new User ({
            email,
            password: passwordHash,
            displayName
        });
        
        const savedUser = await newUser.save();
        res.json(savedUser);
    }   catch(err) {
        res.status(500).json({error: err.message});
    }
});

userRouter.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;

        //validate
        if (!email || !password)
        return res.status(400).json({ msg: "Not all fields have been entered."});

        const user = await User.findOne({ email: email });
        if (!user)
        return res.status(400).json({ msg: "No account with this email has been registered."})

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
        return res.status(400).json({ msg: "Invalid password." })

        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName,   
            }
        })

    } catch (err){
        res.status(500).json({error: err.message});
    }
});

userRouter.post("/update", async (req, res) => {
    try {
        const {email} = req.body;

        //validate
        if (!email)
        return res.status(400).json({ msg: "Please enter an existing email."});

        const user= await User.findOne({email: email});
        if (!user)
        return res.status(400).json({ msg: "No account with this email has been registered."})
    

        res.json({
                id: user._id,
                email: user.email,
        })

    } catch(err){
        res.status(500).json({ error: err.message })
    }
});

userRouter.put("/resetPassword", async (req, res) => {
    try {
        let {id, password, passwordCheck} = req.body;

        if (!password || !passwordCheck)
        return res.status(400).json({msg: "Not all fields have been entered"});
        if (password.length < 5)
        return res.status(400).json({msg: "The password needs to be at least 5 characters long"});
        if (password !== passwordCheck)
        return res.status(400).json({msg: "Enter the same password twice for verification"});

        // password crypting
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const updatePassword= await User.findByIdAndUpdate(id, {password: passwordHash}, {new: true});
        console.log(updatePassword)
        const savedUser = await updatePassword.save();
        res.json(savedUser);
        
    } catch(err){
        res.status(500).json({ error: err.message })
    }
});

userRouter.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser= await User.findByIdAndDelete(req.user);
        res.json(deletedUser)
    } catch(err){
        res.status(500).json({ error: err.message })
    }
});

userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if(!token) return res.json(false)

        const verified = jwt.verify(token, process.env.JWT_SECRET)
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);

        return res.json(true);
    } catch(err){
        res.status(500).json({ error: err.message })
    }
})

userRouter.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id,
    });
});


module.exports = userRouter; 