import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './Cards';
import '../App.css'

// Función para capitalizar la primera letra
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export function ContainerCards() {
    const [pokemon, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true); //Ver si esta cargando la API 
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                // Obtener la lista de todos los Pokémon
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151'); // Cambia el límite según tus necesidades
                const { results } = response.data;

                // Obtener detalles de cada Pokémon
                const requests = results.map(pokemon => axios.get(pokemon.url));
                const responses = await Promise.all(requests);

                const data = responses.map(response => {
                    const { id, name, weight, height, types, sprites } = response.data;
                    return {
                        url: sprites.other['official-artwork'].front_default,
                        name: capitalize(name),
                        num: `#${id.toString().padStart(3, '0')}`,
                        peso: `${weight / 10}kg`,
                        altura: `${height / 10}m`,
                        type: capitalize(types[0].type.name),
                        sts: `nav tp-${types[0].type.name}`,
                        type2: types[1] ? capitalize(types[1].type.name) : '',
                        sts2: types[1] ? `nav tp-${types[1].type.name}` : ''
                    };
                });

                setPokemons(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    //Funcion para manejar cambios en la busqueda
    const handleSearchChange = (event) =>{
        setSearchTerm(event.target.value);
    };

    //Filtrar pokemones segun la cadena de texto
    const filteredPokemons = pokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.type.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        pokemon.type2.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );


    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='main-container'>
            <div className="input">
                <input
                type="text"
                placeholder="Search Pokémon or Type"
                value={searchTerm}
                onChange={handleSearchChange}
                />

            </div>

            <div className="container">
                {filteredPokemons.map((pokemon, index) => (
                    <Card
                    key={index}
                    url={pokemon.url}
                    name={pokemon.name}
                    num={pokemon.num}
                    peso={pokemon.peso}
                    altura={pokemon.altura}
                    type={pokemon.type}
                    sts={pokemon.sts}
                    type2={pokemon.type2}
                    sts2={pokemon.sts2}
                    />
                ))}
            </div>
        </div>
    );
}
