import './Pokecard.css';

const Pokecard = ({ id, name, type, exp }) => (
  <div className="Pokecard">
    <h4>{name}</h4>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      alt=""
    ></img>
    <p>Type: {type}</p>
    <p>EXP: {exp}</p>
  </div>
);

export default Pokecard;
