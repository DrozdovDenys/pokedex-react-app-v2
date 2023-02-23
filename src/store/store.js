import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemonsSlice from "./pokemonsSlice";

const rootReducer = combineReducers({
  pokemons: pokemonsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
