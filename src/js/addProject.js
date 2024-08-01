import Project from './project'

import Renderer from './renderer'

let renderer = new Renderer();

function addProject() {
    let addProjectButton = document.querySelector('.add-project');

addProjectButton.addEventListener('click', (e) => {
    let projectName = document.querySelector('#name').value;

    let newProject = new Project([], projectName, '');

    localStorage.setItem(projectName, JSON.stringify(newProject));
    
    let projectArray = [];

    for (let i = 0; i < localStorage.length; i++)
    {
        let key = localStorage.key(i);
        if (key == 'id')
            continue;
        projectArray.push( JSON.parse(localStorage.getItem(key)));
    }

    renderer.renderProjects(projectArray);
    document.querySelector('#name').value = '';


});



}


export default addProject