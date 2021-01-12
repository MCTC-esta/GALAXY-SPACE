const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const thePort =  process.env.PORT || 8000;
const path = require('path')
const cors = require("cors");


app.use(express.static(path.join(__dirname , '../client/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());














app.listen(thePort, () => console.log(`Server running on port ${thePort}`));