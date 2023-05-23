const date = require('../date');

exports.MainPage = (req, res) => {
    let day = date.getdate();
    res.render("ToDolist", {List_Tittle: day, newItems: items});
}
exports.ActionMainPage = (req, res)=>{
    let item = req.body.newItem;
    console.log(req.body);
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
}
exports.workRoute = (req, res)=>{
    res.render("ToDolist", {List_Tittle : "Work", newItems: workItems});
}