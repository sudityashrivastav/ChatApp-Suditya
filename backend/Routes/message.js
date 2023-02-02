const route = require('express').Router();
const Chat = require("../Modules/chat.js");

route.post("/", (req,res)=>{
  const { name } = req.body;
  const chat = new Chat( name );
  chat.save().then(()=>{
    res.status(201).json({success:"Created"});
  }).catch((e)=>{res.status(500).json({errorM: e})});
})
  

module.exports = route;