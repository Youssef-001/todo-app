import Todo from './todo'

import Renderer from './renderer'

import Project from './project'

let renderer = new Renderer();

function addTodo(){
    let taskField = document.querySelector('.task');
let descriptionField = document.querySelector('.task-description');
let formDate = document.querySelector('#form-date');

let priorityField = document.querySelector('#priority');

let submitButton = document.querySelector('.submit');
let taskID;
let taskName;
let taskDescription;
let taskDate;
let taskPriority;


submitButton.addEventListener('click', (e) =>{

    taskName = taskField.value;
    taskDescription = descriptionField.value;
    taskDate = formDate.value;
    taskPriority = priorityField.value;
    taskID = Date.now();

    let newTodo = new Todo(taskName, taskDescription, taskPriority, false, taskDate);


    let projectTitle = document.querySelector('.project-name').innerHTML;


    let sessionObject = (JSON.parse(localStorage.getItem(projectTitle)))

    sessionObject.todos.push(newTodo);

    localStorage.setItem(projectTitle, JSON.stringify(sessionObject));

   

    renderer.renderTodos(JSON.parse (localStorage.getItem(projectTitle)).todos)
    document.querySelector('.div-form').classList.add('hidden');
    document.querySelector('.add-Todo').classList.remove('hidden');

})



}

export default addTodo