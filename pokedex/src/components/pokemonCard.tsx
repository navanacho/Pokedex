import { useState, useEffect } from "react";
import type { pokemonDetail } from "../types/pokemon";

interface pokemonCardProps {
    name: string;
    selected: boolean;
    onSelect: (name: string) => void;
}

function pokemonCard({ name, selected, onSelect }: pokemonCardProps) {
    const [detail, setDetail] = useState<pokemonDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetail = async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data: pokemonDetail = await res.json();

            setDetail(data);
            setLoading(false);
        }
        fetchDetail();
    }, [name]);

    if (loading) {
        return <div className="bg-gray-200 animate-pulse h-40 rounded"></div>;
    }

    return (

        <div
            onClick={() => onSelect(name)}
            className={`p-4 border rounded cursor-pointer transition 
      ${selected ? "border-red-500 scale-105" : ""}`}
        >

            <h2 className="text-lg font-bold capitalize">{name}</h2>

            {detail?.sprites.front_default && (
                <img
                    src={detail.sprites.front_default}
                    alt={name}
                    className="mx-auto"
                />
            )}

            <div className="flex gap-2 justify-center">

                {detail?.types.map((t) => (
                    <span key={t.slot} className="text-sm bg-gray-200 px-2 rounded">
                        {t.type.name}
                    </span>
                ))}

            </div>

            {selected && (

                <div className="mt-3">

                    {detail?.stats.map((s) => (

                        <p key={s.stat.name} className="text-sm">
                            {s.stat.name}: {s.base_stat}
                        </p>

                    ))}

                </div>

            )}
        </div>

    );
}

export default pokemonCard;