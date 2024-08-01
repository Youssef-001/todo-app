// Put in local storage as object of project and todos

import projectController from './js/controller'
import Project from './js/project'
import Todo from './js/todo'
import checkTodo from './js/checkTodo.js'

import Renderer from './js/renderer.js'

import style from'./styles/style.css'

import icon from './styles/plus-box.svg';

import addTodo from './js/addTodo.js';
import addProject from './js/addProject.js';

import deleteTodo from './js/deleteTodo.js'

let renderer = new Renderer();
let controller = new projectController();
let ProjectDefault = new Project([],"My Project", "Testing project");



let todo1 = new Todo("Test todo", "just testing", 3,false, "2024,8,6");
ProjectDefault.todos.push(todo1);



if (localStorage.getItem(ProjectDefault.title) == null)
    {
    localStorage.setItem(ProjectDefault.title, JSON.stringify((ProjectDefault)));
    }

if (localStorage.getItem('id') == null)
{
    localStorage.setItem('id', 1);
}


let testProject = new Project([], 'testProject', 'testing');


let projectsList = [];


for (let i = 0; i < localStorage.length; i++)
    {
        let key = localStorage.key(i);
        if (key=='id')
        {
            console.log("hello world");
            continue;
        }
        projectsList.push(JSON.parse(localStorage.getItem(key)))
    }


renderer.renderProjects(projectsList);


document.querySelector('.project-name').innerHTML = ProjectDefault.title;


let localStorageTodos = JSON.parse(localStorage.getItem('My Project'));
console.log(ProjectDefault.todos)
renderer.renderTodos(localStorageTodos.todos);


document.querySelector('.projects').addEventListener('click', (e) => {
    console.log(e.target);
    console.log(JSON.parse(localStorage.getItem((e.target.id))))
    renderer.renderProject(JSON.parse(localStorage.getItem((e.target.id))));
});


renderer.formRenderer();

renderer.projectFormRender();

let add_todo = new addTodo();

let add_project = new addProject();

let delete_todo = new deleteTodo();

let check_todo = new checkTodo();


// export default factoryTodo;