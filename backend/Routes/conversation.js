const route = require('express').Router();

route.get("/", (req,res)=>{
  res.json({
    name: "Conversation"
  })
});

module.exports = route;