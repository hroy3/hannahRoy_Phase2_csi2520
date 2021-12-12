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

//Index Page, Daily Tasks Section

let taskMonday = [];
let completeMonday = [];

let taskTuesday = [];
let completeTuesday = [];

let taskWednesday = [];
let completeWednesday = [];

let taskThursday = [];
let completeThursday = [];

let taskFriday = [];
let completeFriday = [];

let taskSaturday = [];
let completeSaturday = [];

let taskSunday = [];
let completeSunday = [];


//Daily Tasks Section
app.post("/newdailytaskmonday", (req, res) => {
    let newTaskMonday = req.body.newDailyMonday;
    taskMonday.push(newTaskMonday);
    res.redirect("/");
    
});

app.post("/newdailytasktuesday", (req, res) => {
    let newTaskTuesday = req.body.newDailyTuesday;
    taskTuesday.push(newTaskTuesday);
    res.redirect("/");
    
});

app.post("/newdailytaskwednesday", (req, res) => {
    let newTaskWednesday = req.body.newDailyWednesday;
    taskWednesday.push(newTaskWednesday);
    res.redirect("/");
    
});

app.post("/newdailytaskthursday", (req, res) => {
    let newTaskThursday = req.body.newDailyThursday;
    taskThursday.push(newTaskThursday);
    res.redirect("/");
    
});

app.post("/newdailytaskfriday", (req, res) => {
    let newTaskFriday = req.body.newDailyFriday;
    taskFriday.push(newTaskFriday);
    res.redirect("/");
    
});

app.post("/newdailytasksaturday", (req, res) => {
    let newTaskSaturday = req.body.newDailySaturday;
    taskSaturday.push(newTaskSaturday);
    res.redirect("/");
    
});

app.post("/newdailytasksunday", (req, res) => {
    let newTaskSunday = req.body.newDailySunday;
    taskSunday.push(newTaskSunday);
    res.redirect("/");
    
});

app.post("/completetaskmonday", (req, res) => {
    var completeTaskMonday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskMonday === "string") {
        completeMonday.push(completeTaskMonday);
        //check if the completed task already exits in the task when checked, then remove it
        taskMonday.splice(taskMonday.indexOf(completeTaskMonday), 1);
    } else if (typeof completeTaskMonday === "object") {
        for (var i = 0; i < completeTaskMonday.length; i++) {
            completeMonday.push(completeTaskMonday[i]);
            taskMonday.splice(taskMonday.indexOf(completeTaskMonday[i]), 1);
        }
    }
    res.redirect("/");
});

app.post("/completetasktuesday", (req, res) => {
    var completeTaskTuesday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskTuesday === "string") {
        completeTuesday.push(completeTaskTuesday);
        //check if the completed task already exits in the task when checked, then remove it
        taskTuesday.splice(taskTuesday.indexOf(completeTaskTuesday), 1);
    } else if (typeof completeTaskTuesday === "object") {
        for (var i = 0; i < completeTaskTuesday.length; i++) {
            completeTuesday.push(completeTaskTuesday[i]);
            taskTuesday.splice(taskTuesday.indexOf(completeTaskTuesday[i]), 1);
        }
    }
    res.redirect("/");
});

app.post("/completetaskwednesday", (req, res) => {
    var completeTaskWednesday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskWednesday === "string") {
        completeWednesday.push(completeTaskWednesday);
        //check if the completed task already exits in the task when checked, then remove it
        taskWednesday.splice(taskWednesday.indexOf(completeTaskWednesday), 1);
    } else if (typeof completeTaskWednesday === "object") {
        for (var i = 0; i < completeTaskWednesday.length; i++) {
            completeWednesday.push(completeTaskWednesday[i]);
            taskWednesday.splice(taskWednesday.indexOf(completeTaskWednesday[i]), 1);
        }
    }
    res.redirect("/");
});

app.post("/completetaskthursday", (req, res) => {
    var completeTaskThursday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskThursday === "string") {
        completeThursday.push(completeTaskThursday);
        //check if the completed task already exits in the task when checked, then remove it
        taskThursday.splice(taskThursday.indexOf(completeTaskThursday), 1);
    } else if (typeof completeTaskThursday === "object") {
        for (var i = 0; i < completeTaskThursday.length; i++) {
            completeThursday.push(completeTaskThursday[i]);
            taskThursday.splice(taskThursday.indexOf(completeTaskThursday[i]), 1);
        }
    }
    res.redirect("/");
});

app.post("/completetaskfriday", (req, res) => {
    var completeTaskFriday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskFriday === "string") {
        completeFriday.push(completeTaskFriday);
        //check if the completed task already exits in the task when checked, then remove it
        taskFriday.splice(taskFriday.indexOf(completeTaskFriday), 1);
    } else if (typeof completeTaskFriday === "object") {
        for (var i = 0; i < completeTaskFriday.length; i++) {
            completeFriday.push(completeTaskFriday[i]);
            taskFriday.splice(taskFriday.indexOf(completeTaskFriday[i]), 1);
        }
    }
    res.redirect("/");
});

app.post("/completetasksaturday", (req, res) => {
    var completeTaskSaturday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskSaturday === "string") {
        completeSaturday.push(completeTaskSaturday);
        //check if the completed task already exits in the task when checked, then remove it
        taskSaturday.splice(taskSaturday.indexOf(completeTaskSaturday), 1);
    } else if (typeof completeTaskSaturday === "object") {
        for (var i = 0; i < completeTaskSaturday.length; i++) {
            completeSaturday.push(completeTaskSaturday[i]);
            taskSaturday.splice(taskSaturday.indexOf(completeTaskSaturday[i]), 1);
        }
    }
    res.redirect("/");
});

app.post("/completetasksunday", (req, res) => {
    var completeTaskSunday = req.body.check;
    //check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTaskSunday === "string") {
        completeSunday.push(completeTaskSunday);
        //check if the completed task already exits in the task when checked, then remove it
        taskSunday.splice(taskSunday.indexOf(completeTaskSunday), 1);
    } else if (typeof completeTaskSunday === "object") {
        for (var i = 0; i < completeTaskSunday.length; i++) {
            completeSunday.push(completeTaskSunday[i]);
            taskSunday.splice(taskSunday.indexOf(completeTaskSunday[i]), 1);
        }
    }
    res.redirect("/");
});

//On Events Page:

let eventTitleArray = [];
// let eventDescriptionArray = [];
// let eventTimeArray = []
//Create a new Event
app.post("/newevent", (req, res) => {
    let newEventTitle = req.body.event_title;
    let newEventDescription = req.body.event_description;
    let newEventTime = req.body.event_time;
    let newEventDate = req.body.event_date;

    // let newEvent = [req.body.event_title, req.body.event_description, req.body.event_time, req.body.event_date]

    // eventTitleArray.push(newEventTitle);
    eventTitleArray.push(newEventTitle, newEventDescription, newEventDate, newEventTime);

    // eventDescriptionArray.push(newEventDescription, newEventDate, newEventTime);
    res.redirect("/");
});

//Server Routes
//index: weekly page
app.get("/", (req, res) => {
    res.render("index", {taskMonday: taskMonday, completeMonday: completeMonday, taskTuesday: taskTuesday, completeTuesday:completeTuesday,
        taskWednesday: taskWednesday, completeWednesday: completeWednesday, taskThursday: taskThursday, completeThursday: completeThursday,
        taskFriday: taskFriday, completeFriday: completeFriday, taskSaturday: taskSaturday, completeSaturday: completeSaturday,
        taskSunday: taskSunday, completeSunday: completeSunday});
  });

//Events Page
app.get("/events", (req, res) => {
    res.render("events", {eventTitleArray: eventTitleArray})
});

//Monthly Page
app.get("/monthly", (req, res) => {
    res.render("monthly");
});
    

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));