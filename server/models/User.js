const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        require:true,
        unique:true
    },
    lastName: {
        type: String,
        require:true,
        unique:true
    },
    email: {
        type: String,
        require:true,
        unique:true
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;