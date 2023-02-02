const express = require('express');
const app = express();
const port = 3000;

require('./db.js');
app.use(express.json());

app.use("/conversation", require('./Routes/conversation.js'));
app.use("/message", require('./Routes/message.js'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})