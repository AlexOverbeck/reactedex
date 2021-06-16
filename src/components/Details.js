import "./Details.css";

function Details(props){
  return (
    <div className="details">
      <h1 className="details__title">{props.pokemon.name}</h1>
      <h2 className="details__subtitle">#{props.pokemon.id}</h2>
      <p>{props.pokemon.description}</p>
    </div>
  );
}

export default Details;