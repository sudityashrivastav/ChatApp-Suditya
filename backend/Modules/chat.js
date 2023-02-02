const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema(
  {  
    name: {
      type: "String"
    }
   
  }
)

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
