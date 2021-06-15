import Details from "./Details";

import "./Screen.css"

function Screen() {
  return (
    <div className="screen">
      <div className="screen__image">
        <img
          alt="A lively looking Pikachu"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        />
      </div>
      <Details />
    </div>
  );
}

export default Screen;
