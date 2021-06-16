import "./Details.css";

function Details(props){
  const description = props.pokemon ? String(props.pokemon.description).replace(/\/n|\/f/, " ") : "";

  return (
    <div className="details">
      <h1 className="details__title">{props.pokemon.name}</h1>
      <h2 className="details__subtitle">#{props.pokemon.id}</h2>
      <div className="details__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Details;