export interface pokemonListItem {
    name: string;
    url: string;
}

export interface pokemonListResponse {
    count: number;
    results: pokemonListItem[];

}

export interface pokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface pokemonSprites {
    front_default: string | null;
    front_shiny: string | null;
}

export interface pokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface pokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    baseExperience: number;
    stats: pokemonStat[];
    sprites: pokemonSprites;
    types: pokemonType[];
}