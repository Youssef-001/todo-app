function checkTodo(){
    let content = document.querySelector('.todos');

    content.addEventListener('click', (e) => {
        if (e.target.type == 'radio')
        {
            console.log(e.target);
            let currentProject = JSON.parse(localStorage.getItem(document.querySelector('.project-name').innerHTML));
            console.log(currentProject.todos);
            for (let i = 0; i < currentProject.todos.length; i++)
            {
                if (currentProject.todos[i].id == e.target.id){
                    currentProject.todos[i].state = true;
                }
            }

            console.log(currentProject.todos);
            localStorage.setItem(document.querySelector('.project-name').innerHTML, JSON.stringify(currentProject));
            // e.target.parentElement.remove();
            // message.innerHTML='<del>helloworld</del>';
            console.log(e.target.parentElement)
            let originalText = e.target.parentElement.childNodes[1].innerHTML;
            e.target.parentElement.childNodes[1].innerHTML = `<del>${originalText}</del>`;
        }
    })
}

export default checkTodo;