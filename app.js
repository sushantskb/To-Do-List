const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const port = process.env.PORT | 3000;
let items = ["Buy Food", "Eat", "Cook Food"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    let day = date.getdate();
    res.render("ToDolist", {List_Tittle: day, newItems: items});
});

app.post("/", (req, res)=>{
    let item = req.body.newItem;
    console.log(req.body);
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", (req, res)=>{
    res.render("ToDolist", {List_Tittle : "Work", newItems: workItems});
})

app.listen(port, () => console.log(`ToDo app listening on port ${port}!`));