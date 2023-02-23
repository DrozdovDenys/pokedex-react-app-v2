import { createSlice } from "@reduxjs/toolkit";
import { getAllPokemonsNames } from "./allPokemonsNamesAC";
import { getFilteredPokemonsNames } from "./filteredPokemonsAC";
import { getSearchedPokemonsNames } from "./searchedPokemonsAC";
import { getPokemons } from "./pokemonsAC";
import { getCurrentPokemon } from "./currentPokemonAC";

const initialState = {
  allPokemonsNames: [],
  is_APN_Loading: false,
  APN_Error: "",

  filteredPokemonsNames: [],
  is_FPN_Loading: false,
  FPN_Error: "",

  searchedPokemonsNames: [],
  is_SPN_Loading: false,
  SPN_Error: "",

  pokemons: [],
  is_P_Loading: false,
  P_Error: "",

  currentPokemon: undefined,
  is_CP_Loading: false,
  CP_Error: "",

  pokemonsTypes: [
    "grass",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ],
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // =========================get All Pokemons Names===================================
      .addCase(getAllPokemonsNames.pending, (state, action) => {
        state.is_APN_Loading = true;
      })
      .addCase(getAllPokemonsNames.fulfilled, (state, action) => {
        state.is_APN_Loading = false;
        state.allPokemonsNames = action.payload;
        state.APN_Error = "";
      })
      .addCase(getAllPokemonsNames.rejected, (state, action) => {
        state.is_APN_Loading = false;
        state.APN_Error = action.payload;
      })
      // =========================get FilteredPokemons Names===================================
      .addCase(getFilteredPokemonsNames.pending, (state, action) => {
        state.is_FPN_Loading = true;
      })
      .addCase(getFilteredPokemonsNames.fulfilled, (state, action) => {
        state.is_FPN_Loading = false;
        state.filteredPokemonsNames = action.payload;
        state.FPN_Error = "";
      })
      .addCase(getFilteredPokemonsNames.rejected, (state, action) => {
        state.is_FPN_Loading = false;
        state.FPN_Error = action.payload;
      })
      // ========================get Searched Pokemons Names=====================================
      .addCase(getSearchedPokemonsNames.pending, (state, action) => {
        state.is_SPN_Loading = true;
      })
      .addCase(getSearchedPokemonsNames.fulfilled, (state, action) => {
        state.is_SPN_Loading = false;
        state.searchedPokemonsNames = action.payload;
        state.SPN_Error = "";
      })
      .addCase(getSearchedPokemonsNames.rejected, (state, action) => {
        state.is_SPN_Loading = false;
        state.SPN_Error = action.payload;
      })
      // ========================get Pokemons======================================
      .addCase(getPokemons.pending, (state, action) => {
        state.is_P_Loading = true;
      })
      .addCase(getPokemons.fulfilled, (state, action) => {
        state.is_P_Loading = false;
        state.pokemons = action.payload;
        state.P_Error = "";
      })
      .addCase(getPokemons.rejected, (state, action) => {
        state.is_P_Loading = false;
        state.P_Error = action.payload;
      })
      // ==========================get Current Pokemon====================================
      .addCase(getCurrentPokemon.pending, (state, action) => {
        state.is_CP_Loading = true;
      })
      .addCase(getCurrentPokemon.fulfilled, (state, action) => {
        state.is_CP_Loading = false;
        state.currentPokemon = action.payload;
        state.CP_Error = "";
      })
      .addCase(getCurrentPokemon.rejected, (state, action) => {
        state.is_CP_Loading = false;
        state.CP_Error = action.payload;
      });
  },
});

export default pokemonsSlice.reducer;
