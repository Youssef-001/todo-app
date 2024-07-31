// Put in local storage as object of project and todos





import projectController from './js/controller'
import Project from './js/project'
import Todo from './js/todo'

import Renderer from './js/renderer.js'

import style from'./styles/style.css'

import icon from './styles/plus-box.svg';

import captureData from './js/form-data.js';

let renderer = new Renderer();
let controller = new projectController();
let ProjectDefault = new Project();


ProjectDefault.setTitle('My Project');
ProjectDefault.setDescription('A default project');




let todo1 = new Todo();

todo1.setTitle('Brush teeth');

todo1.setDescription('Brush your teeth with a toothbrush');

todo1.setPriority(1);



let todo2 = new Todo();

todo2.setTitle('Solve LeetCode problems');

todo2.setDescription('Solve LeetCode problems to improve your programming skills');

todo2.setPriority(2);

todo2.setDate('2024/8/2');

ProjectDefault.addTodo(todo1);

ProjectDefault.addTodo(todo2);

// controller.addProject(ProjectDefault);

if (localStorage.getItem(ProjectDefault.getTitle()) == null)
    {
    localStorage.setItem(ProjectDefault.getTitle(), JSON.stringify(factoryProject(ProjectDefault)));
    }

function factoryTodo(todo){
    return {
        title: todo.getTitle(),
        description: todo.getDescription(),
        priority: todo.getPriority(),
        date: todo.getDate(),
        completed: todo.getState(),
        id: todo.getCounter()
    }
}

function factoryProject(project){
    return {
        title: project.getTitle(),
        description: project.getDescription(),
        todos: project.getTodos().map(factoryTodo),
        id: project.getTitle()
    }
}

console.log(factoryTodo(todo2));


console.log(factoryProject(ProjectDefault));



let testProject = new Project();
testProject.setTitle("test Project");
controller.addProject(testProject);

let projectsList = [];

// controller.getProjects().forEach((project) => projectsList.push((factoryProject(project)))) // get them from localStorage

for (let i = 0; i < localStorage.length; i++)
    {
        let key = localStorage.key(i);
        projectsList.push( JSON.parse(localStorage.getItem(key)));
    }


renderer.renderProjects(projectsList);


document.querySelector('.project-name').innerHTML = ProjectDefault.getTitle();

 let defaultTodos = [];


 let todo3 = new Todo();
todo3.setTitle("todo 3");
testProject.addTodo(todo3);





ProjectDefault.getTodos().forEach((todo) => defaultTodos.push(factoryTodo(todo)))



// controller.getProjects().forEach((project) => localStorage.setItem(project.getTitle(), JSON.stringify(factoryProject(project))));




function objectTodos(){
    let todosArray = [];
    let title = ProjectDefault.getTitle();
    let defaultTodos = JSON.parse(localStorage.getItem(title));
    todosArray = defaultTodos.todos;

     return todosArray;
}
renderer.renderTodos(objectTodos());


document.querySelector('.projects').addEventListener('click', (e) => {
    console.log(e.target);
    console.log(JSON.parse(localStorage.getItem((e.target.id))))
    renderer.renderProject(JSON.parse(localStorage.getItem((e.target.id))));
});


renderer.formRenderer();

renderer.projectFormRender();

let getData = new captureData();




export default factoryTodo;