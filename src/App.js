import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  
  console.log(todo);
  return (
    <div className="App">
      <h1 className="title">Joe's TODO</h1>
      <TodoInput setTodo={setTodo} />
    </div>
  );
}

export default App;
