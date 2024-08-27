import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
            completed: false, isEditing: false}])
            console.log(todos)
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const EditTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? 
            {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map (todo => todo.id === id ? {...todo,task,isEditing: !todo.isEditing} : todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get things Done!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : (
                <Todo task={todo} key={index}
            toggleComplete={toggleComplete} deleteTodo={deleteTodo} 
            EditTodo={EditTodo}/>
            )
            
       ))}
       
    </div>
  )
}

