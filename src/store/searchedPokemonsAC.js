import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchedPokemonsNames = createAsyncThunk(
  "getSearchedPokemonsNames",
  async ({ q, h }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const searchedPokemonsNames = state.pokemons.filteredPokemonsNames.length
        ? state.pokemons.filteredPokemonsNames.filter((name) =>
            name.includes(q)
          )
        : state.pokemons.allPokemonsNames.filter((p) => p.name.includes(q));

      if (!searchedPokemonsNames.length && q) {
        h(`/not-found`);
      }

      return searchedPokemonsNames;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
