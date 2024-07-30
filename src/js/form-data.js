function captureData(){

let taskField = document.querySelector('.task');
let descriptionField = document.querySelector('.task-description');
let formDate = document.querySelector('#form-date');

let priorityField = document.querySelector('#priority');

let submitButton = document.querySelector('.submit');
let taskID;
let taskName;
let taskDescription;
let taskDate;
let taskPriority;


submitButton.addEventListener('click', (e) =>{

    console.log(taskField.value);
    taskName = taskField.value;
    console.log(descriptionField.value);
    taskDescription = descriptionField.value;
    console.log(formDate.value);
    taskDate = formDate.value;
    console.log(priorityField.value);
    taskPriority = priorityField.value;
    taskID = Date.now();


})

return {
    taskID,
    taskName,
    taskDescription,
    taskDate,
    taskPriority

}
}

export default captureData;