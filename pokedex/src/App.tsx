import { useState, useEffect } from 'react'
import type { pokemonListItem, pokemonListResponse } from './types/pokemon'
import PokemonList from './components/pokemonList';

function App() {
  const [pokemons, setPokemons] = useState<pokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [seleccted, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        if (!res.ok) {
          throw new Error("Error al obtener los datos del Pokemon")

        }
        const data: pokemonListResponse = await res.json();
        setPokemons(data.results);
      } catch (error) {
        console.error(error);
        setError("Error al obtener los datos del Pokemon");
      } finally {
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);

  if (loading) return <div>Cargando Pokemon...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Pokédex
      </h1>

      <PokemonList
        pokemons={pokemons}
        selected={seleccted}
        onSelect={setSelected}
      />

    </div>
  )
}
export default App;
