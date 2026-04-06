import type { pokemonListItem } from "../types/pokemon";
import PokemonCard from './pokemonCard';


interface pokemonListProps {
  pokemons: pokemonListItem[];
  selected: string | null;
  onSelect: (name: string) => void;
}

function pokemonList({ pokemons, selected, onSelect }: pokemonListProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          selected={selected === pokemon.name}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
export default pokemonList;