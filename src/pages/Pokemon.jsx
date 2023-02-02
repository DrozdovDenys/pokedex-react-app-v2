import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { PokemonsService } from "../API/pokemonsService";
import { useFatching } from "../hooks/useFetching";
import Preloader from '../Components/Preloader/Preloader';
import AlertNotFound from "../Components/Alert/AlertNotFound";

import { PokemonInfo } from "../Components/PokemonInfo/PokemonInfo";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: `calc(32px + 80 * ((100vw - 320px) / (1440 - 320)))`,
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem',
  },
  textAlign: 'center'
};
theme.typography.h3 = {
  fontSize: `calc(26px + 30 * ((100vw - 320px) / (1440 - 320)))`,
  [theme.breakpoints.up('lg')]: {
    fontSize: '4rem',
  },
  fontWeight: 600
};
theme.typography.h4 = {
  fontSize: `calc(20px + 25 * ((100vw - 320px) / (1440 - 320)))`,
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.5rem',
  },
  fontWeight: 600
};


export const Pokemon = ({ history }) => {
  const { pokemonName } = useParams();
  const { numOfPage } = useParams();
  const [pokemon, setPokemon] = useState(undefined);
  const [getPokemonByName, isLoading, error] = useFatching(async () => {
    const pokemon = await PokemonsService.getByName(pokemonName);
    setPokemon(pokemon);
  })

  useEffect(() => {
    getPokemonByName(pokemonName)
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {isLoading && <Preloader />}
        {pokemon !== undefined && pokemon && <PokemonInfo pokemon={pokemon} theme={theme} />}
        {error && <AlertNotFound />}
        {pokemon !== undefined && (
          <Button variant="contained" sx={{ my: 2 }} onClick={(e) => { e.preventDefault(); history(`/page/${numOfPage}`) }}>
            back to page {numOfPage}
          </Button>
        )}
      </Box>
    </>
  )
}
