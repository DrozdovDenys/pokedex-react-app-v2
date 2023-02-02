import React, { useEffect, useState } from 'react';
import Pagination from '../Components/Pagination/Pagination';
import Preloader from '../Components/Preloader/Preloader';
import { FiltersBar } from '../Components/FiltersBar/FiltersBar';
import { useParams } from 'react-router-dom';
import { PokemonsService } from '../API/pokemonsService';
import { useFatching } from '../hooks/useFetching'
import { PokemonsList } from '../Components/PokemonsList/PokemonsList';

export const Pokemons = ({ history }) => {
    const { numOfPage } = useParams();

    const [pokemonsNames, setPokemonsNames] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setfilteredPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(Number(numOfPage));
    const [pokemonsPerPage, setPokemnsPerPage] = useState(10);
    const pokemonsPerPageOptions = [10, 20, 50];

    // ====================GET ALL POKEMONS NAME AND URL =================================================
    const [getPokemonsNames, isLoading, error] = useFatching(async () => {
        const pokemonsNames = await PokemonsService.getAll();
        setPokemonsNames(pokemonsNames);
    });

    // =================GET POKEMONS TYPES AND CREATE A NEW POKEMON DATA===========================================
    const [getAllPokemons, isPokemonsLoading, pokemonsError] = useFatching(() => {
        pokemonsNames.map(async p => {
            const pokemons = await PokemonsService.getAllById(p.url.split('/').filter(el => parseInt(el)).join(''));
            setPokemons(oldState => [...oldState, pokemons].sort((a, b) => a.id - b.id))
        })
    });

    useEffect(() => {
        getPokemonsNames();
    }, [])

    const handleChangePage = (e, newPage) => {
        setCurrentPage(newPage);
        history(`/page/${newPage}`)
    };

    const handleChangeRowsPerPage = (event) => {
        setPokemnsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    const lastPokemonIndex = currentPage * pokemonsPerPage + pokemonsPerPage;
    const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;

    useEffect(() => {
        setPokemons([]);
        getAllPokemons();
    }, [pokemonsNames.length]);

    return (
        <>
            {error
                ? <h1>{error}</h1>
                : <>
                    {
                        isLoading
                            ? (<Preloader />)
                            : (
                                <div>
                                    <FiltersBar filteredPokemons={filteredPokemons} setfilteredPokemons={setfilteredPokemons} pokemons={pokemons} setCurrentPage={setCurrentPage} history={history} />
                                    <Pagination currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} totalPokemons={filteredPokemons.length === 0 ? pokemonsNames.length : filteredPokemons.length} pokemonsPerPageOptions={pokemonsPerPageOptions} handleChangeRowsPerPage={handleChangeRowsPerPage} handleChangePage={handleChangePage} />

                                    <PokemonsList pokemons={filteredPokemons.length ? filteredPokemons.slice(firstPokemonIndex, lastPokemonIndex) : pokemons.slice(firstPokemonIndex, lastPokemonIndex)} history={history} numOfPage={numOfPage} />
                                    <Pagination currentPage={currentPage} pokemonsPerPage={pokemonsPerPage} totalPokemons={filteredPokemons.length === 0 ? pokemonsNames.length : filteredPokemons.length} pokemonsPerPageOptions={pokemonsPerPageOptions} handleChangeRowsPerPage={handleChangeRowsPerPage} handleChangePage={handleChangePage} />
                                </div>
                            )
                    }
                </>}

        </>
    )
}
