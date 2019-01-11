const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const fileRoutes = require('./server/routes/file-upload');

app.use("/api/", fileRoutes);

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT, KUMAMON!' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));