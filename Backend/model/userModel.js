
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   // _id: {type: String},
   name: { type: String },
   username: { type: String, required: true },
   password: { type: String, required: true },
   userType: { type: String, default: "customer" },
   preference: {type: [String]},
   createdOn: { type: Date, default: new Date() }
});

module.exports = mongoose.model("Users", userSchema);


