import React from "react";
import TodoList from "./TodoList/TodoList";
import initialTodos from "./TodoList/todos";
import "./App.css"; 

class App extends React.Component {
  state = {
    todos: initialTodos,
    // Добавляем для инпута
    inputValue: "",
     name: "",
     tag:"",
  };

// Пишем метод, который будет определять состояние input


  // Пишем метод для удаления state по id
  // Ожидаем todoId , id которого нужно удалить. Мы хотим удалить обьект с ID, который получаем
  deleteTodo = (todoId) => {
    console.log(`Deleting todo with id ${todoId}`);
    this.setState((prevState) => ({
      // Берем начальный. state массив, отфильтровать все todo, id которых не совпадают с тем todoId, который мы передаём
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
// Тест инпут
handleInputChange = event =>{
  console.log(event.currentTarget.value)

  this.setState({inputValue: event.currentTarget.value})
}

// handleNameChange = event =>{
//    this.setState({name: event.currentTarget.value})
// }

// handleTagChange = event =>{
//     this.setState({tag: event.currentTarget.value})
// }

// Универсальный для всех input до деструктуризации
// handleChange = event =>{
//   // event.currentTarget.name значение атрибута name и его значение
//   this.setState({[event.currentTarget.name] : event.currentTarget.value})
// }

handleChange = event =>{ 
  const {name, value} = event.currentTarget;
  // event.currentTarget.name значение атрибута name и его значение
  this.setState({[name] : value})
}





  render() {
    // Деструктуризация в TodoList todos={this.state.todos} =>  <TodoList todos={todos}/>
    const { todos } = this.state;

//     // 1 вариант через фильтр
// // записали в переменную отфильтрованный массив todos, сколько есть todo.completed. Пришёл этот элемент
//     const completedTodos = todos.filter(todo => todo.completed)
//     // Вывели длину массива полученного в результате
//     console.log(completedTodos.length)

// 2 вариант через reduce
// todo.completed  есди нашли, то добавили его в аккумулятор, если не нашли то ничегоне меняем acc прежний. на каждой итерации что то должны вернуть. Если false тоже что то записать
const totalTodoCount = todos.length

const completedTodosCount = todos.reduce((total, todo) => todo.completed ? total + 1 : total, 0)
console.log(completedTodosCount)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          color: "#010101",
        }}
      >

<div>
  {/* Общее количество это длина массива todos */}
<p className="totalTodoCount">Количество ToDo общее: {totalTodoCount} </p>
  <p className="completedTodosCount"> Количество ToDo выполненных: {completedTodosCount} </p>
  
  

        {/* ondDeleteTodo={this.deleteTodo} записали в переменную ссылку на этот метод */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        {/* onChange - фиксирует в input действия, value - значения nput */}
     {/* инпут одиночный образец */}
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
<form>
  <label htmlFor=""> Имя <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
  <label>Прозвище
  <input type="text" value={this.state.tag} name="tag" onChange={this.handleChange}/>


  </label>
  </form>

     
      </div>

      </div>
    );
  }
}

export default App;