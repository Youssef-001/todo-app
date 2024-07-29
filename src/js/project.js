function Project(){
    let todos = [];
    let title = '';
    let description = '';

    function getTodos(){
        return todos;
    }

    function addTodo(todo){
        todos.push(todo);
    }

    function deleteTodo(deletedTodo){
        todos = todos.filter(todo => todo!== deletedTodo);
    }

    

    function setProjectTitle(newTitle){
        title = newTitle;
    }

    function setProjectDescription(newDescription){
        description = newDescription;
    }

    function getProjectTitle(){
        return title;
    }

    function getProjectDescription(){
        return description;
    }


    return {
        getTodos: getTodos,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        setProjectTitle: setProjectTitle,
        setProjectDescription: setProjectDescription,
        getProjectTitle: getProjectTitle,
        getProjectDescription: getProjectDescription
    }

}

export default Project;