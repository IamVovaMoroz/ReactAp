import React from "react";
import TodoList from "./TodoList/TodoList";
import initialTodos from "./TodoList/todos";

class App extends React.Component {
  state = {
    todos: initialTodos,
  };

  // Пишем метод для удаления state по id
  // Ожидаем todoId , id которого нужно удалить. Мы хотим удалить обьект с ID, который получаем
  deleteTodo = (todoId) => {
    console.log(`Deleting todo with id ${todoId}`);
    this.setState((prevState) => ({
      // Берем начальный. state массив, отфильтровать все todo, id которых не совпадают с тем todoId, который мы передаём
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    // Деструктуризация в TodoList todos={this.state.todos} =>  <TodoList todos={todos}/>
    const { todos } = this.state;

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
        {/* ondDeleteTodo={this.deleteTodo} записали в переменную ссылку на этот метод */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;