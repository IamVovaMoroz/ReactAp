import React from "react";
import "./TodoEditor.css"

class TodoEditor extends React.Component {
state ={
    message: ""
}
// Метод получения значения с формы, при изменении меняет state message
handleChange = event => {
    this.setState({ message: event.currentTarget.value })
}
// Получаем сохранённые данные state
handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)

    this.props.onSubmit(this.state.message)
// очистка textearea после отправки
    this.setState({message: ""})
}

render(){
return(
<form onSubmit={this.handleSubmit} className= "TodoEditor"><textarea className="TodoEditor__textarea" value={this.state.message} onChange={this.handleChange}></textarea>

    <button type="submit" className="TodoEditor__btn">Сохранить</button>
    </form>)
}
}

export default TodoEditor