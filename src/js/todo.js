let todoCounter = 0;

function Todo(){

    let todoTitle = '';
    let todoDescription = '';
    let todoPriority  = 0;
    let todoState = false;
    let todoId = Date.now();
    let parentProject = document.querySelector(".project-name").innerHTML;
    let dueDate;
    todoCounter++;
    let todoCounter2 = todoCounter+1;

    function getTitle(){
        return todoTitle;
    }

    function setTitle(newTitle){
        todoTitle = newTitle;
    }

    function getDescription(){
        return todoDescription;
    }

    function setDescription(newDescription){
        todoDescription = newDescription;
    }

    function getPriority(){
        return todoPriority;
    }

    function setPriority(newPriority){
        todoPriority = newPriority;
    }

    function getCounter()
    {
        return todoCounter2;
    }

    function toggleState(){
        todoState =!todoState;
    }

    function setDate(newDate){
        dueDate = newDate;
    }

    function getDate(){
        return dueDate;
    }

    function getState(){
        return todoState;
    }

    function getProject()
    {
        return parentProject;
    }

    function getID()
    {
        return todoId;
    }

    return {
        getTitle: getTitle,
        setTitle: setTitle,
        getDescription: getDescription,
        setDescription: setDescription,
        setPriority: setPriority,
        getPriority: getPriority,
        toggleState: toggleState,
        getState: getState,
        getID: getID,
        getProject: getProject,
        getDate: getDate,
        setDate: setDate,
        getCounter: getCounter
    }

}



export default Todo;