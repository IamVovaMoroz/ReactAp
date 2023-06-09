import React from "react";
import TodoList from "./TodoList/TodoList";
import initialTodos from "./TodoList/todos";
import "./App.css"; 
import Form from "./Form";
import TodoEditor from "./TodoEditor/TodoEditor"
import shortid from "shortid";
import Filter from "./Filter/Filter"
import Modal from "./Modal/Modal"
// для запросов
import PokemonForm from "./PokemonFetch/PokemonForm";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from "./PokemonFetch/PokemonInfo"
import SignupForm from './SignupForm/SignupForm';



// для hook переводим import React from "react";  = import { useState } from "react";




class App extends React.Component {
  state = {
    todos: initialTodos,
    // Добавляем для инпута
    inputValue: "",
    filter: "",
    showModal: false,
    // pokemonName: '',
  };


  


// Метод для открытия и закрытия модалки . От обратного состояния
toggleModal = () => {
  this.setState((state) => ({
    showModal: !state.showModal
  }));
};

// toggleModal = () => {
//   this.setState(state => ({
//     showModal: !state.showModal,
//   }));
// };


// Пишем метод, который будет определять состояние input

// Получаем данные во время submit формы TodoEditor
addTodo = text => {
  console.log(text)
// получили tex из текстериа, создаём тодо экземпляр

const todo = {
  id: shortid.generate(),
  text: text,
  completed : false,
  }

// this.setState(prevState =>({
//   todos: [todo, ...prevState.todos],

// Деструктуризация 
this.setState(({todos}) =>({
  todos: [todo, ...todos],

}))
 
}



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

toggleCompleted = (todoId) => {
  console.log(todoId);

  this.setState((prevState) => ({
    todos: prevState.todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ),
  }));
};

// Для фильтра

changeFilter = event => {
this.setState({filter: event.currentTarget.value})

}


getVisibleTodos = () =>{

const { todos, filter }  = this.state;

// сокращаем и вписываем переменную для фильтра
const normalizedFiltered = filter.toLowerCase();

// // Возвращаем только те тодо, свойство text которых, включает в себя текущее значение фильтра
return todos.filter(todo => todo.text.toLowerCase().includes(normalizedFiltered),) 



}




// При отправке submit 

formSubmitHandler = data =>{
  console.log(data)

  // this.setState({inputValue: event.currentTarget.value})
}



// монтирование, создание 1 раз
componentDidMount(){
console.log("App componentDidMount")
const todos = localStorage.getItem("todos")
const parsedTodos = JSON.parse(todos)
console.log(parsedTodos)
// Добавляем их в локал сторадже
if(parsedTodos){this.setState({todos: parsedTodos})}




}


// Состояние предыдущее prevState, componentDidUpdate - обновление
componentDidUpdate(prevProps, prevState ){
console.log("App componentDidUpdate")

console.log(" prevState", prevState)

if (this.state.todos !== prevState.todos){
  
  console.log("обновилось todos")
  // Запись в локал сторедж по условию
  localStorage.setItem("todos", JSON.stringify(this.state.todos))
}








}

handleFormSubmit = pokemonName => {
  this.setState({ pokemonName });
};


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





  render() {


    // Деструктуризация в TodoList todos={this.state.todos} =>  <TodoList todos={todos}/>
    const { todos, filter} = this.state;

//     // 1 вариант через фильтр
// // записали в переменную отфильтрованный массив todos, сколько есть todo.completed. Пришёл этот элемент
//     const completedTodos = todos.filter(todo => todo.completed)
//     // Вывели длину массива полученного в результате
//     console.log(completedTodos.length)

// 2 вариант через reduce
// todo.completed  есди нашли, то добавили его в аккумулятор, если не нашли то ничегоне меняем acc прежний. на каждой итерации что то должны вернуть. Если false тоже что то записать
const totalTodoCount = todos.length

const completedTodosCount = todos.reduce((total, todo) => todo.completed ? total + 1 : total, 0)


// FILTER
// // сокращаем и вписываем переменную для фильтра
// const normalizedFiltered = this.state.filter.toLowerCase()

// // // Возвращаем только те тодо, свойство text которых, включает в себя текущее значение фильтра
// const visibleTodos = this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFiltered),) 

// Записываем значение с метода 
const visibleTodos = this.getVisibleTodos()

    return (
      <div
        style={{
       
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
          color: "#010101",
        }}
      >

<PokemonForm onSubmitApp={this.handleFormSubmit}/>
<PokemonInfo pokemonName={this.state.pokemonName}/> 
<div>
  {/* Если showModal - true - рендер модалки, false - ничего */}
   <button type="button" onClick={this.toggleModal}>открыть модалку</button>

   {this.state.showModal && (
  <Modal onClose={this.toggleModal}>
    <button type="button" onClick={this.toggleModal}>
      Закрыть модалку
    </button>
  </Modal>
)}



  {/* {this.state.showModal && (
  <Modal onClose={this.toggleModal}>
    
  <button type="button" onClick={this.toggleModal}>Закрыть модалку</button>
   </Modal>) }
  */}


<TodoEditor onSubmit={this.addTodo} onChange={this.changeFilter}/>
  {/* Общее количество это длина массива todos */}

{/* фильтр рендерим , value={filter} значение из state, onChange={this.changeFilter}  - вызвывает на пропе */}
<Filter value={filter} onChange={this.changeFilter}/>

<p className="totalTodoCount">Количество ToDo общее: {totalTodoCount} </p>
  <p className="completedTodosCount"> Количество ToDo выполненных: {completedTodosCount} </p>
  




        {/* ondDeleteTodo={this.deleteTodo} записали в переменную ссылку на этот метод */}
       
        {/* после создания фильтра меняем TodoList todos={todos} => visibleTodos */}

        <TodoList todos={visibleTodos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted}/>
        {/* onChange - фиксирует в input действия, value - значения nput */}
     {/* инпут одиночный образец */}
      

{/* formSubmitHandler - prop, который идёт на моёй submit */}

        <Form  onFormSubmit ={this.formSubmitHandler}/>
       
        <input type="text"  value={this.state.inputValue} onChange={this.handleInputChange}/>

       


    <ToastContainer autoClose={3000}/>
 



 
       
          <SignupForm />
 
      </div>

      </div>
      
    );
  }
}

export default App;