import React, { useEffect, useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import Preloader from "../Components/Preloader/Preloader";
import { FiltersBar } from "../Components/FiltersBar/FiltersBar";
import { useParams } from "react-router-dom";
import { PokemonsList } from "../Components/PokemonsList/PokemonsList";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonsNames } from "../store/allPokemonsNamesAC";
import { getPokemons } from "../store/pokemonsAC";

export const Pokemons = ({ history }) => {
  const { numOfPage } = useParams();

  const [currentPage, setCurrentPage] = useState(Number(numOfPage));
  const [pokemonsPerPage, setPokemnsPerPage] = useState(10);
  const pokemonsPerPageOptions = [10, 20, 50];
  const lastPokemonIndex = currentPage * pokemonsPerPage + pokemonsPerPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPerPage;

  const [filter, setFilter] = useState({
    types: [],
    search: "",
  });

  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
    history(`/page/${newPage}`);
  };

  const handleChangeRowsPerPage = (event) => {
    setPokemnsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const {
    is_APN_Loading,
    APN_Error,
    is_FPN_Loading,
    FPN_Error,
    searchedPokemonsNames,
    is_SPN_Loading,
    SPN_Error,
    pokemons,
    is_P_Loading,
    P_Error,
  } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemonsNames());
  }, []);

  useEffect(() => {
    dispatch(
      getPokemons({
        f: firstPokemonIndex,
        l: lastPokemonIndex,
        q: filter.search,
      })
    );
  }, [currentPage, pokemonsPerPage, searchedPokemonsNames.length]);

  return (
    <>
      {APN_Error || FPN_Error || P_Error || SPN_Error ? (
        <h1 style={{ textAlign: "center" }}>
          {APN_Error || FPN_Error || P_Error || SPN_Error}
        </h1>
      ) : (
        <>
          {is_APN_Loading ? (
            <Preloader />
          ) : (
            <div>
              <FiltersBar
                filter={filter}
                setFilter={setFilter}
                history={history}
                setCurrentPage={setCurrentPage}
              />

              <Pagination
                currentPage={currentPage}
                pokemonsPerPage={pokemonsPerPage}
                totalPokemons={searchedPokemonsNames.length}
                pokemonsPerPageOptions={pokemonsPerPageOptions}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
                handleChangePage={handleChangePage}
              />

              {is_P_Loading || is_FPN_Loading || is_SPN_Loading ? (
                <Preloader />
              ) : (
                <div style={{marginBottom: 20}}>
                  <PokemonsList
                    pokemons={pokemons}
                    history={history}
                    numOfPage={numOfPage}
                  />
                  <Pagination
                    currentPage={currentPage}
                    pokemonsPerPage={pokemonsPerPage}
                    totalPokemons={searchedPokemonsNames.length}
                    pokemonsPerPageOptions={pokemonsPerPageOptions}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    handleChangePage={handleChangePage}
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
