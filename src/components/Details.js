import "./Details.css";

function Details(){
  return (
    <div className="details">
      <h1 className="details__title">Pikachu</h1>
      <h2 className="details__subtitle">Type: Electric</h2>
      <small>#25</small>
      <p>
        When several of these POKéMON gather, their electricity could build and cause lightning storms.
      </p>
    </div>
    // <dl className="screen__details">
    //   <div className="screen__details-item">
    //     <dt>Number:</dt>
    //     <dd>25</dd>
    //   </div>
    //   <div className="screen__details-item">
    //     <dt>Name:</dt>
    //     <dd>Pikachu</dd>
    //   </div>
    //   <div className="screen__details-item">
    //     <dt>Type:</dt>
    //     <dd>Electric</dd>
    //   </div>
    // </dl>
  );
}

export default Details;