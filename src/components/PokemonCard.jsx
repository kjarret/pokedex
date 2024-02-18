import styles from "../style/PokemonCard.module.css";
import "../style/index.css";

function PokemonCard() {
  const card = {
    width: "200px",
    padding: "1rem",
    backgroundColor: "lightsalmon",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px gray",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
    transition: "0.3s ease",
  };

  return (
    <div className="displayCard">
      <figure className="card">
        <img
          className="card-img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
        <figcaption>Bulbasaur</figcaption>
      </figure>
      <figure style={card}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="charmander"
          style={{
            width: "100%",
            height: "auto",
            marginBottom: "0.5rem",
            backgroundColor: "white",
            borderRadius: "inherit",
            boxShadow: "inherit",
          }}
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
