import React, {Component} from 'react'


 const Todo = (props) =>{
    const dArray = props.todos.map(todo =>{
        return <li key={todo.id} > {todo.title}</li>
      })
  
return <ul>
{dArray}

    </ul>
}

export default Todo