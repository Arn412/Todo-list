export default function createProject(name) {
    const project = {
        name,
        todoList: [],
        addTodo(todo) {
            this.todoList.push(todo);
        },
        getTodo() {
            return this.todoList;
        }
    };
    return project;
}
