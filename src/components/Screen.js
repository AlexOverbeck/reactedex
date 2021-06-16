import { useEffect, useState } from "react";

import Details from "./Details";
import "./Screen.css"

function Screen(props) {
  const [image, setImage] = useState({
    alt: "The silhouette of a mystery pokemon",
    src: "/whos-that-bulba.svg",
  });

  useEffect(() => {
    if ("id" in props.pokemon) {
      const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
      setImage({
        alt: `a happy looking ${props.pokemon.name}`,
        src: baseUrl + `${props.pokemon.id}.png`
      });
    }
  }, [props.pokemon])

  return (
    <div className="screen">
      <div className="screen__image">
        <img src={image.src} alt={image.alt} />
      </div>
      <Details pokemon={props.pokemon} />
    </div>
  );
}

export default Screen;
