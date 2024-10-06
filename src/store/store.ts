import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "../features/PokemonList/pokemonListSlice";

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
