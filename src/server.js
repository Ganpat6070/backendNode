const express = require('express');
require('./database');
const router = require('./routing');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;
const app = express();
// const publicDir = process.env.PUBLIC_DIR; // fallback to 'public' if PUBLIC_DIR is not defined


app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
console.log(process.env.PUBLIC_DIR)
// app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

app.use(router);
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))

  // if we found error because of above line then we can use/try res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
