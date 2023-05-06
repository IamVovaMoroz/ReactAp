import React from 'react'
import "./TodoList.css"



const TodoList = ({todos, onDeleteTodo}) =>(
<ul className="todoList">
    {/* До деструктуризации */}
    {/* {todos.map(todo => (
    <li key={todo.id}>
        <p>{todo.text}</p>
        </li>
        ))} 
        </ul> */}


{todos.map(({id, text}) => (
    <li className="todoItem" key={id}>
        <p className="todoText">{text}</p>
{/* todos.map проходит циклом и на каждой итерации получаем свой Id для кнопки, отлавливаем id и отправляем его назад */}
        <button type="button" className="todoButton" onClick={()=> onDeleteTodo(id)}>Удалить</button>
        </li>
        ))} 
        </ul>
 )
 
    
  


export default TodoList