function Project(){
    let todos = [];
    let title = '';
    let description = '';
    let projectID =  Date.now();

    function getTodos(){
        return todos;
    }

    function addTodo(todo){
        todos.push(todo);
        
    }

    function deleteTodo(deletedTodo){
        todos = todos.filter(todo => todo!== deletedTodo);
    }

    

    function setTitle(newTitle){
        title = newTitle;
    }

    function setDescription(newDescription){
        description = newDescription;
    }

    function getTitle(){
        return title;
    }

    function getDescription(){
        return description;
    }

    function getID(){
        return projectID;
    }


    return {
        getTodos: getTodos,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        setTitle: setTitle,
        setDescription: setDescription,
        getTitle: getTitle,
        getDescription: getDescription,
        getID: getID,
    }

}

export default Project;