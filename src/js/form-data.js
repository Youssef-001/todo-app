import Todo from './todo'
import factoryTodo from '../index'
import Controller from '../js/controller'
import Renderer from '../js/renderer'
import Project from '../js/project'

let controller = new Controller();
let renderer = new Renderer();



function captureData(){

    

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

    console.log(taskField.value);
    taskName = taskField.value;
    console.log(descriptionField.value);
    taskDescription = descriptionField.value;
    console.log(formDate.value);
    taskDate = formDate.value;
    console.log(priorityField.value);
    taskPriority = priorityField.value;
    taskID = Date.now();

    let newTodo = new Todo();
    newTodo.setTitle(taskName);
    newTodo.setDescription(taskDescription);
    newTodo.setPriority(taskPriority);

    let todoObject = {
        title: newTodo.getTitle(),
        description: newTodo.getDescription(),
        priority: newTodo.getPriority(),
        date: newTodo.getDate(),
        completed: newTodo.getState(),
        id: newTodo.getCounter()
    }

    let projectTitle = document.querySelector('.project-name').innerHTML;


    let sessionObject = (JSON.parse(localStorage.getItem(projectTitle)))
    console.log(sessionObject);

    sessionObject.todos.push(todoObject);
    console.log("todos: ", sessionObject.todos)

    console.log("the item is:", sessionObject);
    localStorage.setItem(projectTitle, JSON.stringify(sessionObject));

   

    renderer.renderTodos(JSON.parse (localStorage.getItem(projectTitle)).todos)
})


let addProjectButton = document.querySelector('.add-project');

addProjectButton.addEventListener('click', (e) => {
    let projectName = document.querySelector('#name').value;
    let newProject = new Project();
    newProject.setTitle(projectName);
    newProject.id = projectName;

    let projectObject = {
        title: projectName,
        description: "",
        todos: [],
        id: projectName
    }

    localStorage.setItem(projectName, JSON.stringify(projectObject));
    
    let projectArray = [];

    for (let i = 0; i < localStorage.length; i++)
    {
        let key = localStorage.key(i);
        projectArray.push( JSON.parse(localStorage.getItem(key)));
    }

    renderer.renderProjects(projectArray);
    document.querySelector('#name').value = '';


});




return {
    taskID,
    taskName,
    taskDescription,
    taskDate,
    taskPriority

}
}

export default captureData;