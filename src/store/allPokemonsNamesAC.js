import { createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonsService } from "../API/pokemonsService";

export const getAllPokemonsNames = createAsyncThunk(
  "getAllPokemonsNames",
  async (_, { rejectWithValue }) => {
    try {
      const pokemonsNames = await PokemonsService.getAll();
      return pokemonsNames;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
