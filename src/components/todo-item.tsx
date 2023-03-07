// Import dependencies
import * as React from 'react'

// Import interfaces
import { TodoItemInterface } from './../interfaces'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className='todo-item'>
      <div onClick={() => props.handleTodoComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">✔</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>
      
      <div className="todo-item-input-wrapper">
        <ul><li> {props.todo.text}</li></ul>
         <input
         
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
        />
      </div>
      
      <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
      <FontAwesomeIcon icon={faTrash} />

      </div>
    </div>
  )
}

export default TodoItem