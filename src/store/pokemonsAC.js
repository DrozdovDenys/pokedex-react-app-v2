import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonsService } from "../API/pokemonsService";

export const getPokemons = createAsyncThunk(
  "getPokemons",
  async ({ f, l, q }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const pokemonsNames =
        state.pokemons.filteredPokemonsNames.length && q === ""
          ? state.pokemons.filteredPokemonsNames
          : state.pokemons.searchedPokemonsNames;

      const pokemons = await Promise.all(
        pokemonsNames.slice(f, l).map((p) => {
          return PokemonsService.getAllByUrl(p.name ?? p);
        })
      );
      return pokemons;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
