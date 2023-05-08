import React from 'react'
import "./TodoList.css"



const TodoList = ({todos, onDeleteTodo, onToggleCompleted}) =>(
<ul className="todoList">
    {/* До деструктуризации */}
    {/* {todos.map(todo => (
    <li key={todo.id}>
        <p>{todo.text}</p>
        </li>
        ))} 
        </ul> */}


{todos.map(({id, text, completed}) => (
   
        <li key={id} className={("TodoList__item", {"TodoList__item--completed": completed})} >
        <input type="checkbox" className="TodoList__checkbox" checked = {completed} onChange={()=> onToggleCompleted(id)}/>
        <p className="todoText">{text}</p>
{/* todos.map проходит циклом и на каждой итерации получаем свой Id для кнопки, отлавливаем id и отправляем его назад */}
        <button type="button" className="todoButton" onClick={()=> onDeleteTodo(id)}>Удалить</button>
        </li>
        ))} 
        </ul>
 )
 
    
  


export default TodoList