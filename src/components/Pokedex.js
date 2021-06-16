import { useState, useEffect } from "react";
import { SEARCH_QUERY } from '../api/query';
import { useLazyQuery } from "@apollo/client";

import './Pokedex.css';
import Screen from './Screen';
import Search from './Search';

function Pokedex(){
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [searchPokemon, {called, loading, data, error}] = useLazyQuery(SEARCH_QUERY);

  useEffect(()=>{
    searchPokemon({
      variables: { search: search }
    });
  }, [search]);

  useEffect(()=>{
    if (data && data.pokemon.length) {
      let nextPokemon = data.pokemon[0];

      if (data.pokemon.length > 1) {
        nextPokemon = data.pokemon[Math.floor(Math.random()*data.pokemon.length)]
      }
      console.log("next", data);
      console.log("next", nextPokemon);

      setPokemon({
        id: nextPokemon.id,
        name: nextPokemon.name,
        description: nextPokemon.description[0].flavor_text,
      });
    }
  }, [data]);

  if (error) {
    return <p>Error :(</p>
  }

  return (
    <div className="pokedex">
      <div className="pokedex__top">
        <div className="pokedex__camera"></div>
        <div className="pokedex__light pokedex__light--red"></div>
        <div className="pokedex__light pokedex__light--yellow"></div>
        <div className="pokedex__light pokedex__light--green"></div>
        <div className="pokedex__form">
          <Search setSearch={setSearch} />
        </div>
      </div>
      <div className="pokedex__bottom">
        <Screen pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default Pokedex;