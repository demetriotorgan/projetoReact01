import React,{useState} from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"
import EditTodoForm from "./EditTodoForm"

function TodoWrapper(){
    const [todos,setTodos] = useState([])

    const addTodo = todo =>{
        setTodos([
            ...todos,{
                id: Math.random(), 
                task:todo, 
                completed:false,
                isEditing:false,
            }            
        ])
        console.log(todos)
    }

    const toggleCompleted = (id)=> {
        setTodos(todos.map(todo => 
            todo.id===id ? {...todo, completed: !todo.completed}:todo))
    }

    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) =>{
        setTodos(todos.map(todo=> todo.id ===id ? {
            ...todo, isEditing: !todo.isE}:todo))
    }

    const editTask = (task, id) =>{
        setTodos(todos.map(todo => todo.id ===id ? {
            ...todos, task, isEditing: !todo.isEditing}: todo))
    }

    return(
        <div className="TodoWrapper">
        <h1>Coisas para fazer!</h1>
        <TodoForm addTodo={addTodo} />

        {/* Renderizando os todos */}
        {todos.map((todo,index)=>(
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} key={index}/>
            ) : (
                <Todo 
                task={todo} 
                key={index} 
                toggleCompleted={toggleCompleted} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                />
            )
                
        ))}        
        </div>
    )
}

export default TodoWrapper