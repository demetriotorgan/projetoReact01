import React, {useState} from 'react'

function EditTodoForm({editTodo, task}){
    //criando o state do valor digitado
    const [value,setValue] = useState(task.task)

    //função de submit
    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
        
    }

    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
            className='todo-input'
            value={value}
            type="text" 
            placeholder="Editar Tarefa"
            onChange={(e)=>setValue(e.target.value)} />
            <button className='todo-btn' type="submit">Editar</button>
        </form>
    )
}

export default EditTodoForm