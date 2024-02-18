import styles from "../style/PokemonCard.module.css";
import "../style/index.css";

function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      backgroundColor: "lightgreen",
    },
    {
      name: "mew",
      backgroundColor: "lightblue",
    },
    {
      name: "mewto",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
      backgroundColor: "rgb(118, 49, 150)",
    },
    {
      name: "Raiquaza",
      backgroundColor: "darkgreen",
    },
  ];

  return (
    <div className="displayCard">
      {pokemonList.map((pokemon, index) => (
        <figure
          key={index}
          className="card"
          style={{ backgroundColor: pokemon.backgroundColor }}
        >
          {pokemon.imgSrc ? (
            <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      ))}
      <figure
        className={styles.card}
        style={{ backgroundColor: "lightsalmon" }}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="charmander"
          className={styles.cardImg}
        />
        <figcaption>charmander</figcaption>
      </figure>
      <figure className={styles.card}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
          alt="squirtle"
          className={styles.cardImg}
        />
        <figcaption>squirtle</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
