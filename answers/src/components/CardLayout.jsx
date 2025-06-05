export default function Card(props) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card m-5" style={{ maxWidth: "400px" }}>
        <img className="card-img-top" src={props.image} alt={props.cardTitle} />
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardDescription}</p>
          <a href={props.button.url} className="btn btn-primary">
            {props.button.label}
          </a>
        </div>
      </div>
    </div>
  );
}
