import { useState } from "react"
import './todo-input.css';


function TodoInput({todos, setTodos}) {


    const [todoText, setTodoText] = useState("");
    const [todoStatus, setTodoStatus] = useState("all");
    const [todo, setTodo] = useState({});

    const submitHandle = (e) => {
        e.preventDefault();
        setTodo({todoText,todoStatus});
        setTodos(...todos, todo);
    }

    return (
        <form className="form-input" onSubmit={submitHandle}>
            
            <input 
            name="todo" 
            type="text"
            className="todo-input"
            placeholder="Enter your Todo"
            onChange = {(e)=> setTodoText(e.target.value)}
            />

            <button className="todo-button" >
                <i class="fas fa-plus-square"></i>
            </button> 

            <div className="select" >
                <select 
                name="todos"
                class="filter-todo" 
                onChange={(e) => setTodoStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default TodoInput
