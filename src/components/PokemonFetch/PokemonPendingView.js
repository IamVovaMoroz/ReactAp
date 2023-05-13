import { ImSpinner } from 'react-icons/im';
import PokemonDataView from './PokemonDataView';
import pendingImage from './../pending.jpg';



const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};
// Тут сделали скелет и возвращаем уже согласно скелета
export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
// Сверху показываем загружаем а снизу картинку
  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Загружаем...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}