const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({  
 senderID:{
   type: "String",
   required: true
 },
recieverID:{
   type: "String",
   required: true
},
msg:{
   type: "String",
   required: true
 }
},
    {
   timestamps: true
 }
);

const message = mongoose.module("message", messageSchema);

module.exports = message;
