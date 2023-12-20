import './Todo.css'
function Todo({task, toggleCompleted, deleteTodo, editTodo}){
    return(
        <div>
                <p onClick={()=> toggleCompleted(task.id)} className={`${task.completed ? 'completed':"noCompleted"}`}>{task.task}</p>
                <button onClick={()=> deleteTodo(task.id)}>Excluir</button>
                <button onClick={()=>editTodo(task.id)}>Editar</button>
            
        </div>
    )
}

export default Todo