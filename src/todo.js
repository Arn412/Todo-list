export default function createTodo(title,description,dueDate,priority){
    const todo = {
        title,
        description,
        dueDate,
        priority,
        done: false,
        setDone(){
            this.done = true;
        }

    };
    return todo;
}