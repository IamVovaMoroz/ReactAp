import React from "react";


class Form extends React.Component  {
state = {
    name: "",
    tag:"",

};

// Метод на форму Submit, для получения данных при отправке форме через props возвращает данные , которые были введены
handleSubmit = event =>{
    event.preventDefault();
    console.log(this.state)

    this.props.onFormSubmit(this.state)
  
    // this.setState({inputValue: event.currentTarget.value})

//  Вызываем reset после submit формы
this.reset()

  }

  handleChange = event =>{ 
    const {name, value} = event.currentTarget;
    // event.currentTarget.name значение атрибута name и его значение
    this.setState({[name] : value})


  }
  
  // для сброса формы метод формы, кидаем начальное состояние state

reset = () => {
    this.setState({name: "", tag:""})
  }

render(){
  return (
    
    <form onSubmit={this.handleSubmit}> 
    <label > Имя <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
    <label>Прозвище
    <input type="text" value={this.state.tag} name="tag" onChange={this.handleChange}/>
  
  
    </label>
    <button type="submit">Отправить</button>
    </form>



)} 
}

export default Form