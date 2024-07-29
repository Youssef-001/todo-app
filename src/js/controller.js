

function projectController(){

    let projects = [];

   function getProjects(){

    return projects;
            
    }

    function addProject(project){
        projects.push(project);
    }

    function deleteProject(deletedProject){
        projects = projects.filter(project => project!== deletedProject);

    }

    return{
        getProjects: getProjects,
        addProject: addProject,
        deleteProject: deleteProject
    }

}






export default projectController

