import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STORED_POKEMON } from "@/const/localStoredPokemon";

interface IPokemonListState {
  pokemonList: PokemonNameAndUrl[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: IPokemonListState = {
  pokemonList: [],
  status: "idle",
  error: null,
};

export const fetchPokemon = createAsyncThunk(
  "pokemonList/fetchPokemon",
  async () => {
    const localStoredPokemonList = localStorage.getItem(STORED_POKEMON);

    // If there is a local stored list, return it
    if (localStoredPokemonList) {
      return JSON.parse(localStoredPokemonList) as PokemonNameAndUrl[];
    }

    // Otherwise, fetch the list from the API
    const { data, status } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    console.log("data fetched");
    if (status !== 200) {
      throw new Error("Failed to fetch Pokémon.");
    }

    // Store the fetched list in the local storage
    localStorage.setItem(
      STORED_POKEMON,
      JSON.stringify(data.results as PokemonNameAndUrl[])
    );

    return data.results as PokemonNameAndUrl[];
  }
);

const pokemonLisSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.pokemonList = action.payload;
    });
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default pokemonLisSlice.reducer;
