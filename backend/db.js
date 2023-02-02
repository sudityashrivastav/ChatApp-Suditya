const mongoose=require('mongoose');
const URI ="mongodb+srv://sudityashrivastav:Itsmesk@1@cluster0.bcpnzhh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
},()=>{
  console.log('Connected');
});