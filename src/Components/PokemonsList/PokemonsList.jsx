import React from 'react';
import { Grid, Container } from '@mui/material';
import PokemonCard from '../PokemonCard/PokemonCard';
import Preloader from '../Preloader/Preloader';

export const PokemonsList = ({pokemons, history, numOfPage}) => {

    return (
        <>
            <Container maxWidth='lg' sx={{pb:5, minHeight: '100vh'}}>
                {pokemons ? (
                    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} mt={4} justifyContent='center'>
                        {pokemons.map((pokemon) => {
                            return <PokemonCard key={pokemon.id} pokemon={pokemon} history={history} numOfPage={numOfPage}/>
                        })}
                    </Grid>
                ) : (
                    <Preloader />
                )}
            </Container>
        </>
    );
}

