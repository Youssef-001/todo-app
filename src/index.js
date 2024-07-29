
import projectController from './js/controller'
import Project from './js/project'
import Todo from './js/todo'

import Renderer from './js/renderer.js'

import style from'./styles/style.css'

import icon from './styles/plus-box.svg';


let controller = new projectController();


let ProjectTest = new Project();

ProjectTest.name = "Test Project";
ProjectTest.description = "yoooooooo!";

controller.addProject(ProjectTest);


console.log(controller.getProjects())

let todo1 = new Todo();
todo1.setTitle('breakfast');
todo1.setDescription('eggs');

let todo2 = new Todo();
todo2.setTitle('study');
todo2.setDescription('Javascript');

ProjectTest.addTodo(todo1);
ProjectTest.addTodo(todo2);

let todo4 = new Todo();
todo4.setTitle("coffee");
ProjectTest.addTodo(todo4);




console.log("Project Test todos are: " , ProjectTest.getTodos());
let renderer = new Renderer();

renderer.renderTodos(ProjectTest.getTodos());



// ProjectTest.getTodos().forEach(todo => {
//     console.log(todo.getTitle());
//     console.log(todo.getDescription());
// })

let Project2 = new Project();


Project2.setProjectTitle("seecond project");



controller.addProject(Project2);

console.log("project 2 title is:", Project2.getProjectTitle());
ProjectTest.setProjectTitle("hello world");
renderer.renderProjects(controller.getProjects());



// controller.deleteProject(Project2);

let todo3 = new Todo();
todo3.setTitle('read')
todo3.setDescription('quran');
todo3.setPriority(3);

ProjectTest.addTodo(todo3);

console.log("projects: ", controller.getProjects())
console.log("Todos", ProjectTest.getTodos()[2].getState());


let formRnederer = renderer.formRenderer();


let submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', (e) => {
    let newTodo = new Todo();
    newTodo.setTitle(document.querySelector('.task').innerHTML);
    newTodo.setDescription(document.querySelector('.description').innerHTML);
    
})