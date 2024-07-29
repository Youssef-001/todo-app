

function Todo(){

    let todoTitle = '';
    let todoDescription = '';
    let todoPriority  = 0;
    let todoState = false;

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

    function toggleState(){
        todoState =!todoState;
    }

    function getState(){
        return todoState;
    }

    return {
        getTitle: getTitle,
        setTitle: setTitle,
        getDescription: getDescription,
        setDescription: setDescription,
        setPriority: setPriority,
        getPriority: getPriority,
        toggleState: toggleState,
        getState: getState
    }

}



export default Todo;