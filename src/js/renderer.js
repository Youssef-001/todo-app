// Render tasks
// Render projects

// Update tasks when add task
// update project when add new project

function Renderer(){

    function renderTodos(todos)
    {
        let todoList = document.querySelector('.todos');
        todoList.innerHTML = '';

        let todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        todos.forEach(todo => {
            let todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            let todoInput = document.createElement('input');
            todoInput.type = 'checkbox';
            todoInput.id = todo.title;
            let todoLabel = document.createElement('label');
            todoLabel.textContent = todo.title;
            todoLabel.htmlFor = todo.title;

            let todoDelete = document.createElement('button');
            todoDelete.textContent = 'Delete';
            todoDelete.classList.add('todo-delete');
            todoElement.appendChild(todoInput);
            todoElement.appendChild(todoLabel);
            todoList.appendChild(todoElement);
            todoElement.appendChild(todoDelete);
            todoElement.id = todo.id;



        })

    }


    function renderProjects(projects)
    {
        let ProjectList = document.querySelector('.projects');
        ProjectList.innerHTML='';

        projects.forEach(project => {
            let projectElement = document.createElement('button');
            projectElement.classList.add('project-button');
            projectElement.innerHTML = project.title;
            projectElement.id = project.id;
            ProjectList.appendChild(projectElement);



        })
    }

function formRenderer()
{
    let addTodo = document.querySelector('.add-Todo');
    addTodo.addEventListener('click',(e) => {

        document.querySelector('.div-form').classList.remove('hidden');
        addTodo.classList.add('hidden');
    });
}


function renderProject(project){
    document.querySelector('.project-name').innerHTML = project.title;
    renderTodos(project.todos);
}

    return {renderTodos,renderProjects,formRenderer, renderProject};

}





export default Renderer;