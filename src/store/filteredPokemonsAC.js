import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonsService } from "../API/pokemonsService";

export const getFilteredPokemonsNames = createAsyncThunk(
  "getFilteredPokemonsNames",
  async ({ t, h }, { rejectWithValue }) => {
    try {
      const responses = await Promise.all(
        t.map((type) => PokemonsService.getByTypes(type))
      );
      const filteredPokemonsNames = [
        ...new Set(responses.flat().map(({ pokemon }) => pokemon.name)),
      ];

      if (!filteredPokemonsNames.length && t.length) {
        h("/not-found");
      }

      return filteredPokemonsNames;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
