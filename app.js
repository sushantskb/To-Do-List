const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const port = 3000;
let items = ["Buy Food", "Eat", "Cook Food"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let day = date.getdate();
    res.render("ToDoList", {List_Tittle: day, newItems: items});
});

app.listen(port, () => console.log(`ToDo app listening on port ${port}!`));