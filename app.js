const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT | 3000;

const routes = require('./routes/router');

global.items = ["Buy Food", "Eat", "Cook Food"];
global.workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use('/', routes);

app.listen(port, () => console.log(`ToDo app listening on port ${port}!`));