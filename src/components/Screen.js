import Details from "./Details";

import "./Screen.css"

function Screen(props) {
  return (
    <div className="screen">
      <div className="screen__image">
        <img
          alt="A lively looking Pikachu"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        />
      </div>
      <Details pokemon={props.pokemon} />
    </div>
  );
}

export default Screen;
