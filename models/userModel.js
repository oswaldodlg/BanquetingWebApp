const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required:true, unique: true, match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[banqueting.com]*$/ },
    password: {type: String, required: true, minlength: 5},
    displayName: {type: String},
});

module.exports = User = mongoose.model("user", userSchema);
