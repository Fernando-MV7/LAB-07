import React, { useState, useEffect } from "react";

export const RandomComponent = () => {
    const [pokemonList, setPokemonList] = useState(0);
    const [randomPokemon, setRandomPokemon] = useState({ name: "", imageUrl: "" });

    const fetchPokemonData = async () => {

            const response = await fetch("https://pokeapi.co/api/v2/pokemon/?");
            const data = await response.json();
            setPokemonList(data.results);
        
    };

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const fetchRandomPokemonImage = async () => {
        if (pokemonList.length === 0) return;

        const randomIndex = Math.floor(Math.random() * pokemonList.length);
        const randomPokemonName = pokemonList[randomIndex].name;

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${randomPokemonName}`);
            const data = await response.json();
            const randomPokemonImageUrl = data.sprites.front_default;
            setRandomPokemon({ name: randomPokemonName, imageUrl: randomPokemonImageUrl });
    };

    return (
        <div>
            <h2>Random Pokémon</h2>
            <button onClick={fetchRandomPokemonImage}>POKEMON</button>
            {randomPokemon.name && (
                <div>
                    <h3>{randomPokemon.name}</h3>
                    <img src={randomPokemon.imageUrl} alt={randomPokemon.name} style={{ width: "400px", height: "400px" }} />
                </div>
            )}
        </div>
    );
};











