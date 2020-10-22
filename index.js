const express = require('express');
const mongoose = require ('mongoose');
const path = require('path');
const cors = require('cors');
require("dotenv").config()

//set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//Serve static assets if in production 
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static('Client-App/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Client-App', 'build', 'index.html'));
    })
}

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));


// SET UP MONGOOOSE 

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true, 
    useUnifiedTopology:true,
    useCreateIndex: true,
}, (err) => {
    if (err) throw err;
    console.log("MongoDB connection established")
});

// set up route

app.use("/users", require("./routes/userRouter"))