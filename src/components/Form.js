import React from "react";


class Form extends React.Component  {
state = {
    name: "",
    tag:"",
    // для радио кнопок
    experience: "junior"

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

{/* радио кнопки */}
<br/>
<p>Your level</p>

<label>
<input type="radio" name="experience" value="junior" onChange={this.handleChange} checked={this.state.experience === "junior"}/> Junior
</label>

<label>
<input type="radio" name="experience" value="middle" onChange={this.handleChange} checked={this.state.experience === "middle"}/> Middle
</label>
<label>
<input type="radio" name="experience" value="senior" onChange={this.handleChange} checked={this.state.experience === "senior"}/> Senior
</label>

<br/>

    <button type="submit">Отправить</button>
    </form>



)} 
}

export default Form