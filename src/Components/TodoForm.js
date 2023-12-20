import React, {useState} from 'react'

function TodoForm({addTodo}){
    //criando o state do valor digitado
    const [value,setValue] = useState("")

    //função de submit
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value)
        setValue("")
        
    }

    return(
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
            value={value}
            type="text" 
            className='todo-input'
            placeholder="Tarefas a fazer"
            onChange={(e)=>setValue(e.target.value)} />
            <button className='todo-btn' type="submit">Adicionar</button>
        </form>
    )
}

export default TodoForm