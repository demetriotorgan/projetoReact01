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
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            type="text" 
            placeholder="Tarefas a fazer"
            onChange={(e)=>setValue(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TodoForm