import './App.css';
import { useState, useEffect } from 'react'
import CustonCard from './components/Card';
import Navibar from './components/Navibar'
import SeachItem from './components/SearchItem'

export default function App() {
  const [pokemon, setPokemon] = useState({});
  const [searchPokemon, setSearchPokemon] = useState({});

  useEffect(() => {
    handleRequestToAPI();
  }, [])

  async function handleRequestToAPI(){
    try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const {name, sprites: {other}, abilities} = await response.json();
    const {dream_world: {front_default}} = other;

    const curentPokemon = {
      name,
      abilities,
      image: front_default
    }

    setPokemon(curentPokemon)

  } catch (error){
    console.log(error)
  }
}




  return (
    <>
    <Navibar/>
      <div className='container-card'>
        <CustonCard name={pokemon.name} abilities={pokemon.abilities} image={pokemon.image}/>
        <SeachItem searchPokemon={searchPokemon} setSearchPokemon={setSearchPokemon} handleRequestToAPI={handleRequestToAPI}/>
      </div>

    </>
  );
}
