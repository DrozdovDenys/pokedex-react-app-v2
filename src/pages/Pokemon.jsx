import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import Preloader from "../Components/Preloader/Preloader";
import AlertNotFound from "../Components/Alert/AlertNotFound";

import { PokemonInfo } from "../Components/PokemonInfo/PokemonInfo";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPokemon } from "../store/currentPokemonAC";

export const Pokemon = ({ history }) => {
  const { pokemonName } = useParams();
  const { numOfPage } = useParams();

  const { currentPokemon, is_CP_Loading, CP_Error } = useSelector(
    (state) => state.pokemons
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPokemon({ pName: pokemonName }));
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {is_CP_Loading && <Preloader />}
        {currentPokemon !== undefined && currentPokemon && (
          <PokemonInfo pokemon={currentPokemon} />
        )}
        {CP_Error && <AlertNotFound />}
        {currentPokemon !== undefined && (
          <Button
            variant="contained"
            sx={{ my: 2 }}
            onClick={(e) => {
              e.preventDefault();
              history(`/page/${numOfPage}`);
            }}
          >
            back to page {numOfPage}
          </Button>
        )}
      </Box>
    </>
  );
};
