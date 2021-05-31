const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());


const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === 'OPTIONS') {
      res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
      return res.status(200).json({});
  }
  next();
});



app.get("*", function (req, res) {
  res.sendFile('index.html', { root });
})

app.use(helmet());

const server = app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));


