const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
let items = ["Buy Food", "Eat", "Cook Food"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("ToDoList", {List_Tittle: "Thusday", newItems: items});
});

app.listen(port, () => console.log(`ToDo app listening on port ${port}!`));