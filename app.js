const express = require("express");
const app = express();
const date = require(__dirname + "/date-module.js")

const parser = require("body-parser");

app.set('view engine', 'ejs');

app.use(parser.urlencoded({extended: true}));

app.use(express.static("public"));

const tasks = [];
const workTasks = [];

app.get("/", (req, res)=>{
    
    const day = date.getDate();
    res.render("list", {listTitle: day, newTasks: tasks});
});

app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work", newTasks: workTasks})
});

app.post("/", (req, res)=>{
    const task = req.body.newTask;

    if(req.body.list === "Work"){
        workTasks.push(task);
        res.redirect("/work");
    }
    else{
        tasks.push(task);
        res.redirect("/");
    }
});

app.get("/about", (req, res)=>{
    res.render("about");
})
app.listen(8080, function(){
    console.log("Server is Running");
});