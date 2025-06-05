export default function PokeCard({ image, name, type }) {
  return (
    <div className="card m-5" style={{ width: "250px" }}>
      <img src={image} alt={name} />
      <div className="card-body">
        <h4 className="card-title">Name : {name}</h4>
        <h6 className="card-text">Type : {type}</h6>
      </div>
    </div>
  );
}
