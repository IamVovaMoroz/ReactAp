import React, { useEffect, useState } from 'react';
import PokemonErrorView from "./PokemonErrorView"
import PokemonDataView from "./PokemonDataView"
import PokemonPendingView from "./PokemonPendingView.js"
import pokemonAPI from "../services/pokemon-api"

export default function PokemonInfo ({pokemonName}) {

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("idle");
    // state = {
    //     pokemon: null,
    //     error: null,
    //     status: "idle",
    // }


    useEffect(() => {
        // if(pokemonName === "") пустая строка не делаем ренедер
        if(!pokemonName){
            return
        }


        setStatus( "pending");


      
        pokemonAPI.fetchPokemon(pokemonName)
        //.then(pokemon => this.setState({ pokemon,  status: "resolved" }))
        .then(pokemon => {
            setPokemon(pokemon)
            setStatus( "resolved")
        }).catch(error =>{
            // this.setState({ error, status: "rejected" })
            setError(error)
            setStatus( "rejected")
        }
            
           );

    }, [pokemonName])
    

    // componentDidUpdate(prevProps, prevState) {
    //     const prevName = prevProps.pokemonName;
    //     const nextName = this.props.pokemonName;

    //     if (prevName !== nextName) {
     
    //         this.setState({ status: "pending" });

           
            
    //         pokemonAPI.fetchPokemon(nextName)
    //         .then(pokemon => setPokemon(pokemon);

    //             this.setState({ pokemon,  status: "resolved" }))
    //             .catch(error => this.setState({ error, status: "rejected" }));
    //     }
  
       
       

        if (status === 'idle') {
            return <div>Введите имя покемона.</div>;
        }

        if (status === 'pending') {

            return <PokemonPendingView  pokemonName={pokemonName} />
            
            // return <p>...loading</p>;
        }

        if (status === 'rejected') {
            return   <PokemonErrorView message={error.message}/>
          
        }

        if (status === 'resolved') {
            return (

     <PokemonDataView pokemon={pokemon}/>

      
            );
        }
    }




// import React, { Component } from 'react';

// export default class PokemonInfo extends Component {
//     state = {
//         pokemon: null,
//         loading: false,
//         error: null,
//         status: "idle",
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.pokemonName;
//         const nextName = this.props.pokemonName;

//         if (prevName !== nextName) {
//             console.log("Изменилось имя покемона");


//             this.setState({ loading: true, pokemon: null });

//             fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//                 .then(response => {
//                     if(response.ok){
//                         return  response.json()
//                     }
//                     return Promise.reject(
//                         new Error(`Нет покемона c  именем "${nextName}"`))
//                 }
//                     )
//                 .then(pokemon => this.setState({ pokemon })).catch(error => this.setState({error})) 
//                 .finally(() => this.setState({ loading: false }));
//         }
//     }

//     render() {
//         const { pokemon, loading, error, status } = this.state;
//         const { pokemonName } = this.props;
//         return (
//             <div>
//                 <h1>PokemonInfo</h1>
//                 {error && <p>{error.message} </p>}
//                 {loading && <p>...loading</p>}
//                 {pokemon && <p>{this.state.pokemon.name}</p>}
//                 {pokemon && (
//                     <img
//                         src={pokemon.sprites.other["official-artwork"].front_default}
//                         alt={"pokemonName"}
//                         width="500"
//                         height="500"
//                     />
//                 )}
//                 {!pokemonName && <p>введите имя покемона</p>}
//             </div>
//         );
//     }
// }
