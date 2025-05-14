import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Learning Vite' }
  ])

  const name = "DuongRon";
  const age = 24;
  const data = {
    address: 'HaNoi',
    country: 'VietNam'
  }

  const addNewTodo = (name) => {
    if (name.trim() !== "") {
      const newTodo = { id: todoList.length + 1, name };
      setTodoList([...todoList, newTodo]);
    }
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App
