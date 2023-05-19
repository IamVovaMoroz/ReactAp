import {useState} from "react"

export default function PokemonView(){
    const [pokemonName, setPokemonName] = useState("");


return (
<>
<PokemonForm onSubmitApp={this.handleFormSubmit}/>

<ToastContainer autoClose={3000}/>
<PokemonInfo pokemonName={this.state.pokemonName}/>
</>


)




  }
  