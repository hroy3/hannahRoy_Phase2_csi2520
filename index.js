//Server Landing Page
const express = require("express");
const ejs = require("ejs");

const app = express();

//Middleware: Body parser, view engine, set static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));


//Business Logic of Server

let task = [];
let title = [];
let steps = [];
let complete = [];

//Create a New Task
// app.post("/newtaskcard", (req, res) => {
//     let cardTitle = req.body.task_title;
//     let newSteps = req.body.new_step;
//     title.push(cardTitle);
//     steps.push(newSteps);
//     res.redirect("/");
// });


//Daily Tasks Section
app.post("/newdailytask", (req, res) => {
    let newTask = req.body.newDaily;
    task.push(newTask);
    res.redirect("/");
    
});

app.post("/completetask", (req, res) => {
    var completeTask = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        //check if the completed task already exits in the task when checked, then remove it
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
});




//Server Routes
//index: weekly page
app.get("/", (req, res) => {
    res.render("index", {task: task, complete: complete, title: title, steps: steps});
  });

//Events Page
app.get("/events", (req, res) => {
    res.render("events")
});

//Monthly Page
app.get("/monthly", (req, res) => {
    res.render("monthly")
});
    

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));