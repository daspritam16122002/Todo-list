import React, {useState} from 'react'
import Todoform from './Todoform'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos,{id: uuidv4(),task: todo, completed:false, isEditing: false} ])
  }
  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id?{ ...todo, completed: !todo.completed } : todo ))
  }
  const deleteTodo = id =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    // <div className='TodoWrapper'>
    //   <h1>Complete this task asap👍</h1>
    //   <Todoform addTodo = {addTodo}/>
    //   {todos.map((todo,index)=>(
        
    //     <Todo task = {todo} 
    //     key={index}
    //     toggleComplete ={toggleComplete}
    //     deleteTodo={deleteTodo}
    //     editTodo={editTodo} />
    //   ))} 
    // </div>
    <div className="TodoWrapper">
      <h1>Complete this task asap👍</h1>
      <Todoform addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
      <footer className='footer'>
        This page is made with ❤️ by PRITAM 
      </footer>
    </div>
  )
}

export default TodoWrapper