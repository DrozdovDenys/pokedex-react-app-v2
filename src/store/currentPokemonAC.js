import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonsService } from "../API/pokemonsService";

export const getCurrentPokemon = createAsyncThunk(
  "getCurrentPokemon",
  async ({ pName }, { rejectWithValue }) => {
    try {
      const pokemon = await PokemonsService.getByName(pName);
      return pokemon;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
