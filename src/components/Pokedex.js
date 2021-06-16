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
      variables: { search: "pikachu" }
    });

    if (data) {
      const firstPokemon = data.pokemon[0];

      setPokemon({
        id: firstPokemon.id,
        name: firstPokemon.name,
        description: firstPokemon.description[0].flavor_text,
      });
    }
  }, [search, data])

  if (!called || loading) {
    return <p>Loading...</p>
  };

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
          <Search />
        </div>
      </div>
      <div className="pokedex__bottom">
        <Screen pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default Pokedex;