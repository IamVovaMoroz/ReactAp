import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const styles = { form: { marginBottom: 20 } };

export default class PokemonForm extends Component {
  
  // Локальное состояние имени
  state = {
    pokemonName: '',
  };
// Локальное состояние имени хранит, обновляет его при каждом вводе в input при   onChange={this.handleNameChange}
// Делем контролируемый компонент(элемент). То что мы вводим в input, сохраняется в state. Перерендеривается компронент и мы видем в результате в value, то что в state в данный момент
  handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
// Условие, чтобы не отправлялась пустая строка в запросах. СТавим return и выходит с кода при этом условии
    if (this.state.pokemonName.trim() === '') {
    
      toast.error("Введите имя покемона")
      return;
    }


// при отправке формы вызываем метод из app и закидываем в него name с формы.
    this.props.onSubmitApp(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Найти
        </button>
      </form>
    );
  }
}