import './Pokedex.css';
import Search from './Search';

function Pokedex(){
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
      <div>TODO: Pokedex Screen Goes Here!</div>
    </div>
  );
}

export default Pokedex;