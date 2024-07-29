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
            todoInput.id = todo.getTitle();
            let todoLabel = document.createElement('label');
            todoLabel.textContent = todo.getTitle();
            todoLabel.htmlFor = todo.getTitle();

            let todoDelete = document.createElement('button');
            todoDelete.textContent = 'Delete';
            todoDelete.classList.add('todo-delete');
            todoElement.appendChild(todoInput);
            todoElement.appendChild(todoLabel);
            todoList.appendChild(todoElement);
            todoElement.appendChild(todoDelete);



        })

    }


    function renderProjects(projects)
    {
        let ProjectList = document.querySelector('.projects');
        ProjectList.innerHTML='';

        projects.forEach(project => {
            let projectElement = document.createElement('button');
            projectElement.classList.add('project-button');
            projectElement.innerHTML = project.getProjectTitle();

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

    return {renderTodos,renderProjects,formRenderer};

}





export default Renderer;