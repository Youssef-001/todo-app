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
            todoInput.type = 'radio';
            todoInput.id = todo.id;
           
            let todoLabel = document.createElement('label');
            todoLabel.textContent = todo.title;
            todoLabel.htmlFor = todo.id;
            console.log(todo);

            if (todo.state == true)
                {
                    todoInput.checked = true;
                    todoLabel.innerHTML =`<del> ${todo.title}</del>`;
                }

            let todoDelete = document.createElement('button');
            todoDelete.textContent = 'Delete';
            todoDelete.classList.add('todo-delete');
            todoDelete.id = todo.id;
            todoElement.appendChild(todoInput);
            todoElement.appendChild(todoLabel);
            todoList.appendChild(todoElement);
            todoElement.appendChild(todoDelete);
            // todoElement.id = todo.id;



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
            projectElement.id = project.title;
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

    document.querySelector('.cancel').addEventListener('click', (e) => {
        document.querySelector('.div-form').classList.add('hidden');
        addTodo.classList.remove('hidden');
    })
}

function projectFormRender()
{   
    let projectAdd = document.querySelector('.add-project');
    let projectForm = document.querySelector('#project-form');
    let project_add_button = document.querySelector('#project-add-button');
    let cancelButton = document.querySelector('.cancel-project');
    project_add_button.addEventListener('click',(e) => {
        projectForm.classList.remove('hidden');

    });

    cancelButton.addEventListener('click',(e) => {
        projectForm.classList.add('hidden')});


}


function renderProject(project){
    document.querySelector('.project-name').innerHTML = project.title;
    renderTodos(project.todos);
}

    return {renderTodos,renderProjects,formRenderer, renderProject,projectFormRender};

}





export default Renderer;