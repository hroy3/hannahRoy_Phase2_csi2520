let addCardButton = document.querySelector('#newcardbutton');
let taskContainer = document.querySelector('.tasks_container');

let deleteButton = document.querySelector('#delete_task_card');


// function newTaskCard() {
//     // let newCardDiv = document.querySelector("task_card");
//     let newCardDiv = document.createElement("div");
//     newCardDiv.className = 'task';

//     let submit = document.createElement("input");
//     submit.type = "submit";
//     submit.value = "Add";
//     submit.id = "submitTask"

//     let form = document.createElement("form");
//     form.setAttribute("method", "post");
//     form.setAttribute("action", "/newtaskcard");

//     let titleInput = document.createElement("input");
//     titleInput.type = "text";
//     titleInput.name = "task_title";
//     titleInput.placeholder = "Task Title";
//     titleInput.className = "create_new_input";

//     // let titleInputDiv = document.createElement('div'); 
//     // titleInputDiv.innerHTML = document.getElementsByClassName("#task_title_input");

//     let stepInput = document.createElement("input");
//     stepInput.type = "text";
//     stepInput.name = "new_step";
//     stepInput.placeholder = "Add a Step";
//     stepInput.className = "create_new_input";

//     form.appendChild(submit);
//     form.appendChild(titleInput);
//     form.appendChild(stepInput);
//     newCardDiv.appendChild(form);

//     document.querySelector(".task_card").appendChild(newCardDiv);

// }
  

function newTaskCard(text) {
    let newCardDiv = document.createElement("div");
    newCardDiv.className = 'task';

    const title = document.createElement('h2');
    const step = document.createElement('h2');

    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = "task_title";
    titleInput.placeholder = "Task Title";
    titleInput.className = "create_new_input";

    let stepInput = document.createElement("input");
    stepInput.type = "text";
    stepInput.name = "new_step";
    stepInput.placeholder = "Add a Step";
    stepInput.className = "create_new_input";

    title.textContent = text.my_title;
    step.textContent = text.my_step;

    newCardDiv.appendChild(title);
    newCardDiv.appendChild(step);

    newCardDiv.appendChild(stepInput);
    newCardDiv.appendChild(titleInput);
    document.querySelector(".task_card").appendChild(newCardDiv);
}

addCardButton.addEventListener('click', newTaskCard);

