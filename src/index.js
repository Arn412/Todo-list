import createTodo from "./todo";
import createProject from "./project";

const all = createProject("all");

let projectList = {};
projectList['all'] = all;

function addProject(name){
    let project = createProject(name);
    projectList[name] = project;
}

function addToProject(project,todo){
    if(project in projectList){
        let cur = projectList[project];
        cur.addTodo(todo);
        if(project!="all"){
            all.addTodo(todo);
        }
    }
}

addProject("new")
let test = createTodo("new","new","new","old");
addToProject("new",test);
console.log(projectList["new"].getTodo());

