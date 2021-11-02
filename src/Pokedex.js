import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = ({ characters }) => (
  <>
    <h2>POKEDEX</h2>
    <div className="Pokedex">
      {characters.map((c) => (
        <Pokecard
          key={c.id}
          id={c.id}
          name={c.name}
          type={c.type}
          exp={c.base_experience}
        />
      ))}
    </div>
  </>
);

export default Pokedex;
