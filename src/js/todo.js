

// let todoCounter = 0;


function Todov2(title, description, priority, state, dueDate)
{
    // todoCounter++;
    let id = parseInt(localStorage.getItem('id')) || 0;
    let newId = id + 1;
    localStorage.setItem('id', newId);
    return {
        title: title,
        description: description,
        priority: priority,
        state: state,
        dueDate: dueDate,
        id: newId,
        
    }

}



export default Todov2;