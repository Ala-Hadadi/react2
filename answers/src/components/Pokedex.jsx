import PokeCard from "./PokeCard";

export default function Pokedex({ pokemon }) {
  return (
    <div className="container">
      <h1>Pokedex:</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {pokemon.map((item) => (
          <PokeCard
            key={item.id}
            name={item.name}
            image={item.image}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}
